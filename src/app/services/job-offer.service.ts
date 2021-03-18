import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joboffer } from '../interfaces/job_offer';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {
  baseUrl: string;



  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/job-offers';
  }


  getAll(): Promise<Joboffer[]> {

    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient.get<Joboffer[]>(this.baseUrl, httpOptions).toPromise();
  };
}
