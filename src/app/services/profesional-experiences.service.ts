import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfesionalExperience } from '../interfaces/professional-experience';

@Injectable({
  providedIn: 'root',
})
export class ProfesionalExperienceService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
/*     this.baseUrl = 'http://localhost:3000/api/profesional_experience';
 */        this.baseUrl = 'https://tikjobs.herokuapp.com/profesional_experience';

  }

  getAll(): Promise<ProfesionalExperience[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<ProfesionalExperience[]>(this.baseUrl, httpOptions)
      .toPromise();
  }

  getProfesionalExperienceByIdFreelance(pId): Promise<ProfesionalExperience[]> {
    const httpOptions = { headers: new HttpHeaders() };
    return this.httpClient
      .get<ProfesionalExperience[]>(`${this.baseUrl}/${pId}`, httpOptions)
      .toPromise();
  }
  // GET BY TOKEN FREELANCER
  getByIdToken(pId): Promise<ProfesionalExperience[]> {
    return this.httpClient
      .get<ProfesionalExperience[]>(
        `${this.baseUrl}/profile`,
        this.createHeaders()
      )
      .toPromise();
  }

  // CREATE prof experience
  create(formValues): any {
    return this.httpClient
      .post(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }

  // DELETE A experience BY id experience y id usertoken
  deleteByIdToken(idProfesionalExperience): Promise<any> {
    console.log('log del piD', idProfesionalExperience);

    return this.httpClient
      .delete<any>(
        `${this.baseUrl}/${idProfesionalExperience}`,
        this.createHeaders()
      )
      .toPromise();
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token_tikjobs'),
      }),
    };
  }
}
