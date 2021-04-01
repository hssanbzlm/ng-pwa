import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Course } from '../shared/interfaces/course.interface';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  selectedCourse: Course;
  courses: Course[];
  sub: Subscription;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.loadCourses();
  }
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  loadCourses() {
    let courses$: Observable<Course[]>;
    courses$ = this.coursesService.getAllCourses();
    courses$.subscribe((courses) => {
      this.courses = courses;
    });
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
    this.sub = this.coursesService
      .updateCourse(course)
      .pipe(
        tap(() =>
          this.courses.splice(
            this.courses.findIndex((c) => c.id == course.id),
            1,
            course
          )
        )
      )
      .subscribe();
  }

  createCourse(course: Course) {
    this.sub = this.coursesService
      .createCourse(course)
      .pipe(tap(() => this.courses.push(course)))
      .subscribe();
  }

  deleteCourse(id: number) {
    this.sub = this.coursesService
      .deleteCourse(id)
      .pipe(
        tap(() => {
          this.courses.splice(
            this.courses.findIndex((c) => c.id == id),
            1
          );
          this.resetCourse();
        })
      )
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
