import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Company } from '../interfaces/company';

@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    /* this.baseUrl = 'http://localhost:3000/api/companies'; */
    this.baseUrl = 'https://git.heroku.com/tikjobs.git/api/companies';

  }

  // GET ALL COMPANIES
  getAll(): Promise<Company[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Company[]>(this.baseUrl, httpOptions)
      .toPromise();
  }

  // GET BY ID COMPANY
  getById(pId): Promise<Company> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Company>(`${this.baseUrl}/${pId}`, httpOptions)
      .toPromise();
  }

  // GET BY COMPANY token
  getByIdToken(): Promise<Company> {
    return this.httpClient
      .get<Company>(`${this.baseUrl}/profile`, this.createHeaders())
      .toPromise();
  }

  // CREATE A COMPANY
  create(fd: FormData): Promise<any> {
    return this.httpClient.post<any>(this.baseUrl, fd).toPromise();
  }

  // UPDATE COMPANY
  update(fd: FormData): Promise<any> {
    return this.httpClient
      .put<any>(this.baseUrl, fd, this.createHeaders())
      .toPromise();
  }

  // DELETE COMPANY
  delete(): Promise<any> {
    return this.httpClient
      .put<any>(`${this.baseUrl}`, this.createHeaders())
      .toPromise();
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        authorization: localStorage.getItem('token_tikjobs'),
      }),
    };
  }

  login(formValues): Promise<any> {
    return this.httpClient
      .post(`${this.baseUrl}/login`, formValues)
      .toPromise();
  }
}
