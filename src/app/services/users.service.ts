import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Freelance } from '../interfaces/freelance';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/freelancers';
  }
  // GET ALL FREELANCERS
  getAll(): Promise<Freelance[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Freelance[]>(this.baseUrl, httpOptions)
      .toPromise();
  }

  // GET BY ID FREELANCER
  getById(pId): Promise<Freelance> {
    const httpOptions = { headers: new HttpHeaders() };
    return this.httpClient
      .get<Freelance>(`${this.baseUrl}/${pId}`, httpOptions)
      .toPromise();
  }

  // GET BY TOKEN FREELANCER
  getByIdToken(pId): Promise<Freelance> {
    return this.httpClient
      .get<Freelance>(`${this.baseUrl}/profile`, this.createHeaders())
      .toPromise();
  }

  // NEW FREELANCER
  create(formValues): Promise<any> {
    formValues.image = 'http';
    formValues.video = 'http';

    return this.httpClient
      .post<any>(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }

  // UPDATE FREELANCER
  update(formValues): Promise<any> {
    formValues.image = 'http';
    return this.httpClient
      .put<any>(`${this.baseUrl}/update`, formValues, this.createHeaders())
      .toPromise();
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token_tikjobs'),
      }),
    };
  }

  login(formValues): Promise<any> {
    return this.httpClient
      .post(`${this.baseUrl}/login`, formValues)
      .toPromise();
  }

  // searchFreelanceByCountry(pName): Promise<Freelance[]> {
  //   return this.httpClient.get<Freelance[]>(`${this.baseUrl}/${pName}`).toPromise();
  // }

  // searchFreelanceByEducation(pName): Promise<Freelance[]> {
  //   return this.httpClient.get<Freelance[]>(`${this.baseUrl}/${pName}`).toPromise();
  // }
}
