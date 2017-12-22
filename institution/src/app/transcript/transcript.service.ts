import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Transcript, Student, CourseEntry } from '../shared/models';

@Injectable()
export class TranscriptService {
  private static transcripts: Transcript[] = null;
  private serviceUrl = './mock-api/transcripts/transcripts.json';

  constructor(
    private http: HttpClient
  ) { }

  private getTranscripts(): Observable<Transcript[]> {
    if (TranscriptService.transcripts == null) {
      return this.http.get<Transcript[]>(this.serviceUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .do(data => TranscriptService.transcripts = data)
      .catch(this.handleError);
    }

    return Observable.of(TranscriptService.transcripts);
  }

  getTranscript(studentId: string): Observable<Transcript> {
    return this.getTranscripts()
      .map((transcripts: Transcript[]) => transcripts.find(xscript => xscript.studentInfo.id === studentId));
  }

  _getTranscript(studentId: string): Observable<Transcript> {
    const transcript: Transcript = {
      'studentInfo': {
        'id': String(Math.random() * (10000 - 1) + 1),
        'firstName': "Abby",
        'lastName': "Normal",
        'birthDate': new Date(),
        'gender': "F",
        'address': "123 Main St",
        'gradeLevel': 6,
      },
      'courses': [
        {
          'courseId': "101",
          'courseTitle': "Algebra 101",
          'institutionId': "EVIA",
          'institutionName': "East Valley Institute of Awesomeness",
          'mark': "B",
          'credit': 5.0
        }
      ]
    }

    return Observable.of(transcript);
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';

    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

}
