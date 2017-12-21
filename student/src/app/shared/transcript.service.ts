import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Injectable()
export class TranscriptService {
    private serviceUrl = './mock-api/transcript/transcript-client-object.json';

    constructor(
        private http: HttpClient
    ) { }

    getStudentTranscript() {
        // return this.http.get(`https://someplace.com/api/transcripts/1234`)
        //     .do((res: Response) => res.json());

        return this.http.get(this.serviceUrl);
            //.do(data => JSON.stringify(data)))
            //.do(data => StudentService.students = data)
            //.catch(this.handleError);
    }

}