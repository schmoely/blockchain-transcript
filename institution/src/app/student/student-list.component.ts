import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { Student } from '../shared/models/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentListComponent implements OnInit {
  students: Student[] = <Student[]>[];

  constructor(
    private router: Router,
    private studentService: StudentService
  ) { }

  refresh() {
    this.studentService.getStudents()
      .subscribe(students => this.students = students,
                 error => console.log(error),
                 () => {});
  }

  ngOnInit() {
    this.refresh();
  }

  onShowTranscript(student: Student) {
    this.router.navigateByUrl('/transcript/' + student.id);
  }

}
