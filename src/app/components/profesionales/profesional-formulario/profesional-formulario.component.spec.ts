import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalFormularioComponent } from './profesional-formulario.component';

describe('ProfesionalFormularioComponent', () => {
  let component: ProfesionalFormularioComponent;
  let fixture: ComponentFixture<ProfesionalFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
