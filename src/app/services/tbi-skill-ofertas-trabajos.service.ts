import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TbiSkillOfertasTrabajosService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    /* this.baseUrl = 'http://localhost:3000/api/tbi_ofertas_trabajos_skills'; */
    this.baseUrl = 'https://git.heroku.com/tikjobs.git/api/tbi_ofertas_trabajos_skills';

  }

  insert(formValues): Promise<any> {
    return this.httpClient
      .post(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }

  createHeaders(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'authorization': localStorage.getItem('token_tikjobs')
      }),
    };
  }
}
