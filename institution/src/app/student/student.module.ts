import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentListComponent } from './student-list.component';
import { StudentService } from './student.service';
import { StudentEntryComponent } from './student-entry/student-entry.component';

const studentRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'students', component: StudentListComponent },
  { path: 'student', component: StudentEntryComponent }
]);

@NgModule({
  imports: [
    CommonModule,
    studentRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StudentListComponent,
    StudentEntryComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentModule { }
