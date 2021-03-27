import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joboffer } from '../interfaces/job_offer';

@Injectable({
  providedIn: 'root',
})
export class JobOfferService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/job_offers';
  }

  getAll(): Promise<Joboffer[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Joboffer[]>(this.baseUrl, httpOptions)
      .toPromise();
  }

  getById(pId): Promise<Joboffer> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Joboffer>(`${this.baseUrl}/${pId}`, httpOptions)
      .toPromise();
  }

  insert(formValues): any {
    return this.httpClient
      .post(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }

  // searchJobByCountry(pName): Promise<Joboffer[]> {
  //   return this.httpClient
  //     .get<Joboffer[]>(`${this.baseUrl}/joboffer?name=${pName}`)
  //     .toPromise();
  // }

  // SEARCH BY COUNTRY, CITY OR function_department
  searchData(pName): Promise<Joboffer[]> {
    return this.httpClient
      .get<Joboffer[]>(`${this.baseUrl}/joboffer/${pName}`)
      .toPromise();
  }

  // DELETE A JOB OFFER BY id jobOffer y id companyToken
  deleteByIdToken(): Promise<Joboffer> {
    return this.httpClient
      .delete<Joboffer>(this.baseUrl, this.createHeaders())
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
