import { Student } from './student.model';
import { CourseEntry } from './course-entry.model';

export class Transcript {
    studentInfo: Student;

    courses: CourseEntry[];
}