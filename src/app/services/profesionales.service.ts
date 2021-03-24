import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';

@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {
  baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/companies';
  }

  getAll(): Promise<Company[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Company[]>(this.baseUrl, httpOptions)
      .toPromise();
  }


  getById(pId): Promise<Company> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Company>(`${this.baseUrl}/${pId}`, httpOptions)
      .toPromise();
  }


  getByIdToken(pId): Promise<Company> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Company>(`${this.baseUrl}/edit/${pId}`, httpOptions)
      .toPromise();
  }

  /* getCompanyDetailByJobOffer(pId): Promise<Company> {
    const httpOptions = { headers: new HttpHeaders() };
    return this.httpClient.get<Company>(`${this.baseUrl}/${pId}`, httpOptions).toPromise();

  } */

  create(formValues): Promise<any> {
    formValues.image = 'http';
    console.log(formValues.image);

    return this.httpClient
      .post<any>(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }

  // UPDATE COMPANY
  update(data): Promise<any> {
    return this.httpClient
      .put<any>(`${this.baseUrl}`, data, this.createHeaders())
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
}
