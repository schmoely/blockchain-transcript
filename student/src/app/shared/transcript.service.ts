import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

import { Student, CourseEntry, Transcript } from './models'

@Injectable()
export class TranscriptService {
    private serviceUrl = './mock-api/transcript/transcript-client-object.json';
    private blockChainSvcUrl = "http://localhost:3001/blocks"
    private blockChain;

    constructor(
        private http: HttpClient
    ) { }

    getBlockChain(): Observable<any> {
        // return this.http.get(`https://someplace.com/api/transcripts/1234`)
        //     .do((res: Response) => res.json());

        return this.http.get(this.blockChainSvcUrl)
                   .do(data => JSON.stringify(data))
                   .do(data => this.blockChain = data)
                   .catch(this.handleError);
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