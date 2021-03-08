import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormularioComponent } from './user-formulario.component';

describe('UserFormularioComponent', () => {
  let component: UserFormularioComponent;
  let fixture: ComponentFixture<UserFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
