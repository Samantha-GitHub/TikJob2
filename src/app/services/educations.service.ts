import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from '../interfaces/education';

@Injectable({
  providedIn: 'root',
})
export class EducationsService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
/*     this.baseUrl = 'http://localhost:3000/api/educations';
 */    this.baseUrl = 'https://tikjobs.herokuapp.com/api/educations';
  }
  //  GET ALL EDUCATIONS
  getAll(): Promise<Education[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Education[]>(this.baseUrl, httpOptions)
      .toPromise();
  }

  getEducationsByIdFreelance(pId): Promise<Education[]> {
    const httpOptions = { headers: new HttpHeaders() };
    return this.httpClient
      .get<Education[]>(`${this.baseUrl}/${pId}`, httpOptions)
      .toPromise();
  }

  // GET BY TOKEN FREELANCER
  getByIdToken(pId): Promise<Education[]> {
    return this.httpClient
      .get<Education[]>(`${this.baseUrl}/profile`, this.createHeaders())
      .toPromise();
  }

  // CREATE prof education
  create(formValues): any {
    return this.httpClient
      .post(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }
  // DELETE A COURSE BY id education y id userToken
  deleteByIdToken(idEducation): Promise<any> {
    console.log('log del piD', idEducation);

    return this.httpClient
      .delete<any>(`${this.baseUrl}/${idEducation}`, this.createHeaders())
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
