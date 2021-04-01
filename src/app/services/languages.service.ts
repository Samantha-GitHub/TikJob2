import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Language } from '../interfaces/language';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    /* this.baseUrl = 'http://localhost:3000/api/languages'; */
    this.baseUrl = 'https://tikjobs.herokuapp.com/api/languages';

  }

  //  GET ALL LANGUAGES
  getAll(): Promise<Language[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Language[]>(this.baseUrl, httpOptions)
      .toPromise();
  }
  //  GET BY FREELANCE
  getLanguagesByIdFreelance(pId): Promise<Language[]> {
    return this.httpClient
      .get<Language[]>(`${this.baseUrl}/${pId}`)
      .toPromise();
  }
  //  GET BY FREELANCE
  getLanguagesByIdJobsOffers(pId): Promise<Language[]> {
    return this.httpClient
      .get<Language[]>(`${this.baseUrl}/${pId}`)
      .toPromise();
  }

  // GET BY TOKEN FREELANCER
  getByIdToken(pId): Promise<Language[]> {
    return this.httpClient
      .get<Language[]>(`${this.baseUrl}/profile`, this.createHeaders())
      .toPromise();
  }

  insert(formValues) {
    return this.httpClient
      .post(this.baseUrl, formValues, this.createHeaders())
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
