import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';

import { Transcript } from '../shared/models/transcript.model';
import { TranscriptService } from './transcript.service';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TranscriptComponent implements OnInit {
  transcript: Transcript;

  constructor(
    private transcriptService: TranscriptService
  ) { }

  refresh() {
    this.transcriptService.getTranscript("1")
      .subscribe(transcript => this.transcript = transcript,
                 error => console.log(error),
                 () => {});
  }

  ngOnInit() {
    this.refresh();
  }
}
