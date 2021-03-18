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

  getAll(): Promise<Course[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient.get<Course[]>(this.baseUrl, httpOptions).toPromise();
  }
}
