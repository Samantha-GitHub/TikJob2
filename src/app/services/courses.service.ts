import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/courses';
  }

  // GET ALL COURSES
  getAll(): Promise<Course[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient.get<Course[]>(this.baseUrl, httpOptions).toPromise();
  }

  // GET BY ID OF FREELANCE
  getCoursesByIdFreelance(pId): Promise<Course[]> {
    const httpOptions = { headers: new HttpHeaders() };
    return this.httpClient
      .get<Course[]>(`${this.baseUrl}/${pId}`, httpOptions)
      .toPromise();
  }

  // GET BY TOKEN FREELANCER
  getByIdToken(pId): Promise<Course[]> {
    return this.httpClient
      .get<Course[]>(`${this.baseUrl}/profile`, this.createHeaders())
      .toPromise();
  }

  //  HEADERS
  createHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token_gym'),
      }),
    };
  }
}
