import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TbiSkillsUsuarioService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    /* this.baseUrl = 'http://localhost:3000/api/tbi_freelance_skills'; */
    this.baseUrl = 'https://tikjobs.herokuapp.com/api/tbi_freelance_skills';
  }

  create(formValues): Promise<any> {
    return this.httpClient
      .post(this.baseUrl, formValues)
      .toPromise();
  }

  createHeaders(): any {
    return {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token_tikjobs'),
      }),
    };
  }
}
