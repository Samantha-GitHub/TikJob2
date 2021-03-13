import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profesional-formulario',
  templateUrl: './profesional-formulario.component.html',
  styleUrls: ['./profesional-formulario.component.scss'],
})
export class ProfesionalFormularioComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  // openXl(content) {
  //   this.modalService.open(content, { size: 'xl' });
  // }

  // openVerticallyCentered(content) {
  //   this.modalService.open(content, { centered: true });
  // }

  active = 1;
}
