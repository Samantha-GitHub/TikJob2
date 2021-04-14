import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TbiLanguageOfertasTrabajosService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
/*     this.baseUrl = 'http://localhost:3000/api/tbi_ofertas_trabajos_languages';
 */        this.baseUrl = 'https://tikjobs.herokuapp.com/api/tbi_ofertas_trabajos_languages';

  }


  create(formValues): Promise<any> {
    return this.httpClient
      .post(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }


  createHeaders(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'authorization': localStorage.getItem('token_gym')
      }),
    };
  }
}
