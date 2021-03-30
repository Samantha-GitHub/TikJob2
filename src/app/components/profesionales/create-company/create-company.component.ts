import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesionalesService } from 'src/app/services/profesionales.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss'],
})
export class CreateCompanyComponent implements OnInit {
  active = 1;
  files;
  // FORM GROUP
  formularioCompany: FormGroup;

  constructor(
    private router: Router,
    private companyService: ProfesionalesService
  ) {
    // FORMULARIO company
    this.formularioCompany = new FormGroup({
      name_company: new FormControl(),
      phone: new FormControl(),
      vat: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      zip_code: new FormControl(),
      country: new FormControl(),
      website: new FormControl(),
      image: new FormControl(),
      email: new FormControl(),
      employees_number: new FormControl(),
      year_founded: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  // Create new Company
  // async onSubmitCompany(): Promise<any> {
  //   const response = await this.companyService.create(
  //     this.formularioCompany.value
  //   );

  //   /* this.router.navigate(['/logincompany', response.insertId]); */

  //   this.router.navigate(['/logincompany']);
  // }

  // HANDLE FILES
  onSubmitCompany(): void {
    // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
    let fd: FormData = new FormData();
    fd.append('image', this.files[0]);
    fd.append('username', this.formularioCompany.value.name_company);
    fd.append('password', this.formularioCompany.value.phone);
    fd.append('firstname', this.formularioCompany.value.vat);
    fd.append('lastname', this.formularioCompany.value.street);
    fd.append('email', this.formularioCompany.value.city);
    fd.append('phone', this.formularioCompany.value.zip_code);
    fd.append('gender', this.formularioCompany.value.gender);
    fd.append('country', this.formularioCompany.value.country);
    fd.append('city', this.formularioCompany.value.city);
    fd.append('zipcode', this.formularioCompany.value.zipcode);
    fd.append('streetName', this.formularioCompany.value.streetName);
    fd.append('website', this.formularioCompany.value.website);
    fd.append('video', this.formularioCompany.value.video);
    fd.append('job_title', this.formularioCompany.value.job_title);
    fd.append('profile', this.formularioCompany.value.profile);
    // fd.append('skill', this.formularioFreelancer.value.lastname);
    // fd.append('language', this.formularioFreelancer.value.lastname);

    // Delegamos el envío del formulario en el servicio
    this.companyService.create(fd).then((result) => {
      this.router.navigate(['']);
      console.log(result);
    });
  }

  onChange($event): void {
    this.files = $event.target.files;
    console.log('$event', $event.target.files);
  }
}
