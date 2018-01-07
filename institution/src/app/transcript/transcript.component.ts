import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Transcript, Student, CourseEntry } from '../shared/models';
import { TranscriptService } from './transcript.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TranscriptComponent implements OnInit, OnDestroy {
  studentId: string;
  transcript: Transcript;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private transcriptService: TranscriptService
  ) { }

  private refresh() {
    this.transcriptService.getTranscript(this.studentId)
      .subscribe(transcript => this.transcript = transcript,
                 error => console.log(error),
                 () => {});
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.studentId = params['studentId'];

      this.refresh();
    });
  }

  onSubmitCourseGrade(student: Student, courseEntry: CourseEntry) {
    const transcript: Transcript = {
      'studentInfo' : student,
      'courses' : [ courseEntry ]
    };

    this.transcriptService.submitCourseGrade(transcript)
      .subscribe(data => console.log(data),
                 error => console.log(error),
                 () => {});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
