import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TbiLanguageOfertasTrabajosService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/tbi_ofertas_trabajos_languages';
  }

  /* //////////////////////////////////////////////////////////////////////////////////////////
                              START
              Metodos CREATE, UPDATE y DELETE del tbi_languages_ofertas_trabajos
 */

  create(formValues): Promise<any> {
    return this.httpClient
      .post(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }

  /*  update(pId, formValues) {
     return this.httpClient.put(`${this.baseUrl}/${pId}`, formValues).toPromise();
   } */

  /*                              END
                Metodos CREATE, UPDATE y DELETE del tbi_languages_ofertas_trabajos
   */

  createHeaders(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'authorization': localStorage.getItem('token_gym')
      }),
    };
  }
}
