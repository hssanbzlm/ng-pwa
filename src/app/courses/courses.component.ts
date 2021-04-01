import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Course } from '../shared/interfaces/course.interface';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  selectedCourse: Course;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.loadCourses();
    this.resetCourse();
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  loadCourses() {
    this.courses$ = this.coursesService.getAllCourses();
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
    this.resetCourse();
  }

  updateCourse(course: Course) {
    this.coursesService
      .updateCourse(course)
      .pipe(tap(() => this.loadCourses()))
      .subscribe();
  }

  createCourse(course: Course) {
    this.coursesService
      .createCourse(course)
      .pipe(tap(() => this.loadCourses()))
      .subscribe();
  }

  deleteCourse(id: number) {
    this.coursesService
      .deleteCourse(id)
      .pipe(tap(() => this.loadCourses()))
      .subscribe();
  }

  resetCourse() {
    const emptyCourse: Course = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };

    this.selectCourse(emptyCourse);
  }
}
