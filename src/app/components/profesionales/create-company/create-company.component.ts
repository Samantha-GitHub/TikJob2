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
  async onSubmitCompany(): Promise<any> {
    const response = await this.companyService.create(
      this.formularioCompany.value
    );

    /* this.router.navigate(['/logincompany', response.insertId]); */

    this.router.navigate(['/logincompany']);
  }

  // Voy a al perfil del usuario creado

  /*   getCompanyById(pId): any {
      this.router.navigate(['company/edit', pId]);
    } */
}
