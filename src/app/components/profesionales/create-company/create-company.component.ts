import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      name_company: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ]),
      vat: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip_code: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      image: new FormControl(),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/),
      ]),
      employees_number: new FormControl(),
      year_founded: new FormControl(),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/),
      ]),
    });
  }

  ngOnInit(): void { }

  // HANDLE FILES
  onSubmitCompany(): void {
    let fd: FormData = new FormData();
    fd.append('image', this.files[0]);
    fd.append('name_company', this.formularioCompany.value.name_company);
    fd.append('phone', this.formularioCompany.value.phone);
    fd.append('vat', this.formularioCompany.value.vat);
    fd.append('street', this.formularioCompany.value.street);
    fd.append('city', this.formularioCompany.value.city);
    fd.append('zip_code', this.formularioCompany.value.zip_code);
    fd.append('website', this.formularioCompany.value.website);
    fd.append('country', this.formularioCompany.value.country);
    fd.append('email', this.formularioCompany.value.email);
    fd.append(
      'employees_number',
      this.formularioCompany.value.employees_number
    );
    fd.append('year_founded', this.formularioCompany.value.year_founded);
    fd.append('username', this.formularioCompany.value.username);
    fd.append('password', this.formularioCompany.value.password);

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
