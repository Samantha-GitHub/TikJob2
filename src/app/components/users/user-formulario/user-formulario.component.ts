import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-formulario',
  templateUrl: './user-formulario.component.html',
  styleUrls: ['./user-formulario.component.scss'],
})
export class UserFormularioComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
<<<<<<< Features

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
=======
>>>>>>> changed the dropdowns from formulario to responsive nav

  // openXl(content) {
  //   this.modalService.open(content, { size: 'xl' });
  // }

<<<<<<< Features
  public isCollapsed = true;
=======
  // openVerticallyCentered(content) {
  //   this.modalService.open(content, { centered: true });
  // }

  active = 1;
>>>>>>> changed the dropdowns from formulario to responsive nav
}
