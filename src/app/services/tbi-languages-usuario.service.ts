import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TbiLanguagessUsuarioService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/tbi_freelance_languages';
  }

  create(formValues): Promise<any> {
    return this.httpClient
      .post(this.baseUrl, formValues, this.createHeaders())
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
