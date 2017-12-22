import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Transcript } from '../shared/models/transcript.model';
import { TranscriptService } from './transcript.service';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TranscriptComponent implements OnInit {
  studentId: string;
  transcript: Transcript;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private transcriptService: TranscriptService
  ) { }

  refresh() {
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
