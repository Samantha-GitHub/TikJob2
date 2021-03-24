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

  getAll(): Promise<Freelance[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Freelance[]>(this.baseUrl, httpOptions)
      .toPromise();
  }

  getById(pId): Promise<Freelance> {
    const httpOptions = { headers: new HttpHeaders() };
    return this.httpClient
      .get<Freelance>(`${this.baseUrl}/${pId}`, httpOptions)
      .toPromise();
  }

  create(formValues): Promise<any> {
    formValues.image = 'http';
    formValues.video = 'http';

    return this.httpClient
      .post<any>(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }

  createHeaders(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'authorization': localStorage.getItem('token_gym')
      }),
    };
  }

  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise();

  };

  // searchFreelanceByCountry(pName): Promise<Freelance[]> {
  //   return this.httpClient.get<Freelance[]>(`${this.baseUrl}/${pName}`).toPromise();
  // }

  // searchFreelanceByEducation(pName): Promise<Freelance[]> {
  //   return this.httpClient.get<Freelance[]>(`${this.baseUrl}/${pName}`).toPromise();
  // }
}
