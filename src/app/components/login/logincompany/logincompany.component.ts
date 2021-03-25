import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesionalesService } from 'src/app/services/profesionales.service';

@Component({
  selector: 'app-logincompany',
  templateUrl: './logincompany.component.html',
  styleUrls: ['./logincompany.component.scss'],
})
export class LogincompanyComponent implements OnInit {
  labels: string[];
  formulario: FormGroup;
  errorMessage: string;

  constructor(
    private companyService: ProfesionalesService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    this.errorMessage = null;

    try {
      const response = await this.companyService.login(this.formulario.value);
      if (response['error']) {
        setTimeout(() => (this.errorMessage = response.error), 500);
        this.errorMessage = response.error;
      } else {
        localStorage.setItem('token_tikjobs', response.token);
        console.log(response.token);

        /* Swal.fire('Login correcto', 'Has accedido correctamente', 'success')
          .then(result => { */

        /* Inyectamos el router en el constructor para poder hacer una redireccion */

        this.router.navigate(['/company/profile']);

        /* }); */
        this.errorMessage = null;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
