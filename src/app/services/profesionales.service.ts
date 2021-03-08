import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {
  baseUrl: string;
  arrProfesionales: any[];

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://fakerapi.it/api/v1/companies?_quantity=10';
  }
  getAll() {
    return this.httpClient.get(this.baseUrl).toPromise();
  }
}
