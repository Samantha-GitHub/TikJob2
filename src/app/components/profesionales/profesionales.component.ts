import { Component, OnInit } from '@angular/core';
import { ProfesionalesService } from 'src/app/services/profesionales.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.scss']
})
export class ProfesionalesComponent implements OnInit {
  arrProfesionales: any;

  constructor(private profesionalesService: ProfesionalesService) {
    this.arrProfesionales = [];
  }

  async ngOnInit() {
    try {
      const response = await this.profesionalesService.getAll();
      this.arrProfesionales = response['data'];
      console.log(this.arrProfesionales);



    } catch (err) {
      console.log(err);
    }
  }

}
