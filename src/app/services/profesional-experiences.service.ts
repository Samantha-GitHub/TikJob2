import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfesionalExperience } from '../interfaces/professional-experience';

@Injectable({
  providedIn: 'root',
})
export class ProfesionalExperienceService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/profesional_experience';
  }

  getAll(): Promise<ProfesionalExperience[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<ProfesionalExperience[]>(this.baseUrl, httpOptions)
      .toPromise();
  }

  getProfesionalExperienceByIdFreelance(pId): Promise<ProfesionalExperience[]> {
    const httpOptions = { headers: new HttpHeaders() };
    return this.httpClient.get<ProfesionalExperience[]>(`${this.baseUrl}/${pId}`, httpOptions).toPromise();

  }
}
