import { Component, Input } from '@angular/core';
import * as data from './transcript-client-object.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  view = 'Student Transcript';

  constructor(){
    const studentInfo = {};
    const records = {};
    //const data = (<any>data).name;
    //console.log(data); // output 'testing'
  }
  

}
