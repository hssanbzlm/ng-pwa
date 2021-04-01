import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../interfaces/course.interface';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.coursesBaseUrl;
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get<Course[]>(BASE_URL);
  }

  createCourse(course: Course) {
    course.id = Math.random() * 99 + 1;
    return this.http.post<Course>(BASE_URL, course);
  }

  updateCourse(course: Course) {
    return this.http.put<Course>(`${BASE_URL}/${course.id}`, course);
  }

  deleteCourse(id: number) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
