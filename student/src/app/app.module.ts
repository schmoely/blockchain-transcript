import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranscriptService } from './shared/transcript.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TranscriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
