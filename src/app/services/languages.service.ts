import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Language } from '../interfaces/language';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/languages';
  }

  getAll(): Promise<Language[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Language[]>(this.baseUrl, httpOptions)
      .toPromise();
  }

  getLanguagesByIdFreelance(pId): Promise<Language[]> {
    const httpOptions = { headers: new HttpHeaders() };
    return this.httpClient.get<Language[]>(`${this.baseUrl}/${pId}`, httpOptions).toPromise();

  }

  getLanguagesByIdJobsOffers(pId): Promise<Language[]> {
    const httpOptions = { headers: new HttpHeaders() };
    return this.httpClient.get<Language[]>(`${this.baseUrl}/${pId}`, httpOptions).toPromise();

  }
}
