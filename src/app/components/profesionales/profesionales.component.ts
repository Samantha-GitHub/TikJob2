import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company';
import { ProfesionalesService } from 'src/app/services/profesionales.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.scss'],
})
export class ProfesionalesComponent implements OnInit {
  allCompanies: Company[];

  constructor(private profesionalesService: ProfesionalesService) {
    this.allCompanies = [];
  }

  async ngOnInit() {
    try {
      this.allCompanies = await this.profesionalesService.getAll();
      console.log(this.allCompanies);
    } catch (error) {
      console.log(error);
    }
  }
}
