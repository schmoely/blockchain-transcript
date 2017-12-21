import { Component, Input } from '@angular/core';
import { TranscriptService } from './shared/transcript.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  view = 'Student Transcript';
  transcript = {};
  constructor(private transcriptService: TranscriptService){
    this.getStudent();
  }

  getStudent() {
    this.transcriptService.getStudentTranscript().subscribe(data => this.transcript = data);
    console.log(this.transcript);
  }

}
