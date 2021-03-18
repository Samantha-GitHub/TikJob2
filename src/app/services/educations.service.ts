import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from '../interfaces/education';

@Injectable({
  providedIn: 'root',
})
export class EducationsService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/educations';
  }

  getAll(): Promise<Education[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Education[]>(this.baseUrl, httpOptions)
      .toPromise();
  }

  getEducationsByIdFreelance(pId): Promise<Education[]> {
    const httpOptions = { headers: new HttpHeaders() };
    return this.httpClient.get<Education[]>(`${this.baseUrl}/${pId}`, httpOptions).toPromise();

  }
}
