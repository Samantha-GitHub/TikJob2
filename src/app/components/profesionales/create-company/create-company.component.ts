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
  // FORM GROUP
  formularioCompany: FormGroup;

  constructor(
    private router: Router,
    private companyService: ProfesionalesService
  ) {
    // FORMULARIO company
    this.formularioCompany = new FormGroup({
      name_company: new FormControl('',
        [
          Validators.required,

        ]),
      phone: new FormControl(
        '',
        [
          Validators.required,

        ]
      ),
      vat: new FormControl(
        '',
        [
          Validators.required,

        ]
      ),
      street: new FormControl('',
        [
          Validators.required,

        ]),
      city: new FormControl(
        '',
        [
          Validators.required,

        ]
      ),
      zip_code: new FormControl(
        '',
        [
          Validators.required,

        ]
      ),
      country: new FormControl(
        '',
        [
          Validators.required,

        ]
      ),
      website: new FormControl('',
        [
          Validators.required,

        ]),
      image: new FormControl(),
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/)

        ]
      ),
      employees_number: new FormControl(),
      year_founded: new FormControl(),
      username: new FormControl(
        '',
        [
          Validators.required,

        ]
      ),
      password: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/)

        ]
      ),
    });
  }

  ngOnInit(): void { }

  // Create new Company
  async onSubmitCompany(): Promise<any> {
    const response = await this.companyService.create(
      this.formularioCompany.value
    );

    /* this.router.navigate(['/logincompany', response.insertId]); */

    this.router.navigate(['/logincompany']);
  }


}
