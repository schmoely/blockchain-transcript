import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Student } from '../../shared/models';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentEntryComponent implements OnInit {
  studentEntryForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.studentEntryForm = this.formBuilder.group({
      'firstName':        ['Abby', Validators.required],
      'lastName':         ['Normal', Validators.required],
      'birthDate':        [new Date(), Validators.required],
      'gender':           ['F', Validators.required],
      'address':          ['', Validators.required],
      'gradeLevel':       [1, Validators.required],
    });
  }

  saveStudent() {
    if (!this.studentEntryForm.valid) {
      alert(`Some of your entries are missing or invalid, please correct them`);
      return;
    }

    const student: Student = {
      'id' : "",

      'firstName' : this.studentEntryForm.value.firstName,
      'lastName' : this.studentEntryForm.value.lastName,
      'birthDate' : new Date(),
      'gender' : this.studentEntryForm.value.gender,
      'address' : this.studentEntryForm.value.address,

      'gradeLevel' : this.studentEntryForm.value.gradeLevel,
    };

    this.studentService.createStudent(student);
    this.router.navigateByUrl('/students');
  }
}
