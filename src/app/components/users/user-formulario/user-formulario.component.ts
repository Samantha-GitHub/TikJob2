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

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  public isCollapsed = true;
}
