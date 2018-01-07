import { Component, Input } from '@angular/core';
import { TranscriptService } from './shared/transcript.service';
import { DecimalPipe, DatePipe } from '@angular/common';

import { Transcript } from './shared/models';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  view = 'Student Transcript';
  transcript: Transcript;

  constructor(
    private transcriptService: TranscriptService
  ) {  }

  ngOnInit() {
    this.refresh();
  }

  private refresh() {
    this.transcriptService.getBlockChain()
      .subscribe(blockChain => {
          this.transcript = new Transcript();
          this.transcript.courses = [];

          for (const block of blockChain as Array<any>) {
              if (block.index > 0) {
                this.transcript.studentInfo = block.data.studentInfo;
                this.transcript.courses.push(block.data.courses[0]);
              }
          }
        },
        error => console.log(error),
        () => {});
  }
}
