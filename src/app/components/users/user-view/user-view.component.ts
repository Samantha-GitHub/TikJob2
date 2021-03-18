import { Component, OnInit } from '@angular/core';
import { ProfesionalesService } from 'src/app/services/profesionales.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  constructor(
    private profesionalService: ProfesionalesService) { }

  ngOnInit(): void {
  }

}
