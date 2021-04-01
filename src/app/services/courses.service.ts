import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    /* this.baseUrl = 'http://localhost:3000/api/courses'; */
    this.baseUrl = 'https://tikjobs.herokuapp.com/api/courses';

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

  // CREATE COURSE
  create(formValues): any {
    return this.httpClient
      .post(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }

  // DELETE A COURSE BY id jobOffer y id companyToken
  deleteByIdToken(idCourse): Promise<any> {
    console.log('log del piD', idCourse);

    return this.httpClient
      .delete<any>(`${this.baseUrl}/${idCourse}`, this.createHeaders())
      .toPromise();
  }
  //  HEADERS
  createHeaders() {
    return {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token_tikjobs'),
      }),
    };
  }
}
