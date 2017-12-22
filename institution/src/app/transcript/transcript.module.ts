import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranscriptComponent } from './transcript.component';
import { TranscriptService } from './transcript.service';

const transcriptRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'transcripts', component: TranscriptComponent }
]);

@NgModule({
  imports: [
    CommonModule,
    transcriptRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TranscriptComponent
  ],
  providers: [
    TranscriptService
  ]
})
export class TranscriptModule { }
