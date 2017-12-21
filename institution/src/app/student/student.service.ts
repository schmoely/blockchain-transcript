import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { Student } from '../shared/models/student.model';

@Injectable()
export class StudentService {
  private static students: Student[] = null;
  private serviceUrl = './mock-api/students/students.json';
  private newStudentId = 10;

  constructor(
    private http: HttpClient
  ) { }

  getStudents(): Observable<Student[]> {
    if (StudentService.students == null) {
      return this.http.get<Student[]>(this.serviceUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .do(data => StudentService.students = data)
      .catch(this.handleError);
    }

    return Observable.of(StudentService.students);
  }

  createStudent(newStudent: Student) {
    newStudent.id = String(Math.random() * (10000 - 1) + 1);

    StudentService.students.push(newStudent);
  }

  deleteStudent(student: Student) {
    const deleteIndex = StudentService.students.indexOf(student);

    if (deleteIndex > -1) {
      StudentService.students.splice(deleteIndex, 1);
    }
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
