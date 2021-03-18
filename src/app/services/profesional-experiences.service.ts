import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfesionaExperience } from '../interfaces/professional-experience';

@Injectable({
  providedIn: 'root',
})
export class ProfesionalExperienceService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/profesional_experience';
  }

  getAll(): Promise<ProfesionaExperience[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<ProfesionaExperience[]>(this.baseUrl, httpOptions)
      .toPromise();
  }
}
