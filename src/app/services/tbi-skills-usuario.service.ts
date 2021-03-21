import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TbiSkillsUsuarioService {
  /*  baseUrl: string; */

  constructor(private httpClient: HttpClient) {
    /* this.baseUrl = 'http://localhost:3000/api/skills/tbi_freelance'; */
  }

  /*   insert(formValues) {
      return this.httpClient.post(this.baseUrl, formValues).toPromise();
    } */
}
