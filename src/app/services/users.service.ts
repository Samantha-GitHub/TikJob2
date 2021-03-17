import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Freelance } from '../interfaces/freelance';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;


  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/freelancers';
  }


  getAll(): Promise<Freelance[]> {

    return this.httpClient.get<Freelance[]>(this.baseUrl).toPromise();
  };
}
