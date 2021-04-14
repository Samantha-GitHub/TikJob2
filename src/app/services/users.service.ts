import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Freelance } from '../interfaces/freelance';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
/*     this.baseUrl = 'http://localhost:3000/api/freelancers';
 */        this.baseUrl = 'https://tikjobs.herokuapp.com/api/freelancers';

  }
  // GET ALL FREELANCERS
  getAll(): Promise<Freelance[]> {
    const httpOptions = { headers: new HttpHeaders() };

    return this.httpClient
      .get<Freelance[]>(this.baseUrl, httpOptions)
      .toPromise();
  }

  // GET BY ID FREELANCER
  getById(pId): Promise<Freelance> {
    const httpOptions = { headers: new HttpHeaders() };
    return this.httpClient
      .get<Freelance>(`${this.baseUrl}/${pId}`, httpOptions)
      .toPromise();
  }

  // GET BY TOKEN FREELANCER
  getByIdToken(): Promise<Freelance> {
    return this.httpClient
      .get<Freelance>(`${this.baseUrl}/profile`, this.createHeaders())
      .toPromise();
  }

  // NEW FREELANCER
  create(formValues): Promise<any> {
    formValues.image = 'http';

    return this.httpClient.post<any>(this.baseUrl, formValues).toPromise();
  }

  // NEW FREELANCER with pic
  createPic(fd: FormData): Promise<any> {
    return this.httpClient.post<any>(this.baseUrl, fd).toPromise();
  }

  // UPDATE FREELANCER with multer
  update(fd: FormData): Promise<any> {
    return this.httpClient
      .put<any>(this.baseUrl, fd, this.createHeaders())
      .toPromise();
  }

  // SEARCH BY EDUCATION
  searchFreelanceEducation(pName): Promise<any[]> {
    return this.httpClient
      .get<any[]>(`${this.baseUrl}/search/${pName}`)
      .toPromise();
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        authorization: localStorage.getItem('token_tikjobs'),
      }),
    };
  }

  login(formValues): Promise<any> {
    return this.httpClient
      .post(`${this.baseUrl}/login`, formValues)
      .toPromise();
  }

  // searchFreelanceByCountry(pName): Promise<Freelance[]> {
  //   return this.httpClient.get<Freelance[]>(`${this.baseUrl}/${pName}`).toPromise();
  // }

  // searchFreelanceByEducation(pName): Promise<Freelance[]> {
  //   return this.httpClient.get<Freelance[]>(`${this.baseUrl}/${pName}`).toPromise();
  // }
}
