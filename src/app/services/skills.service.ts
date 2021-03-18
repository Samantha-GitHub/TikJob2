import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  baseUrl: string;



  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/skills';
  }


  getAll(): Promise<[Skill]> {

    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient.get<[Skill]>(this.baseUrl, httpOptions).toPromise();
  };
}