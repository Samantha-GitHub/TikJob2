import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TbiSkillOfertasTrabajosService {

  /*  baseUrl: string; */

  constructor(private httpClient: HttpClient) {

    /*    this.baseUrl = 'http://localhost:3000/api/skills/tbi_ofertas_trabajos'; */

  }


  /*  insert(formValues) {
     return this.httpClient.post(this.baseUrl, formValues).toPromise();
   } */
}
