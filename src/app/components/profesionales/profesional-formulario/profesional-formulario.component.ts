import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/interfaces/company';
import { Joboffer } from 'src/app/interfaces/job_offer';
import { Language } from 'src/app/interfaces/language';
import { Skill } from 'src/app/interfaces/skill';
import { JobOfferService } from 'src/app/services/job-offer.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { ProfesionalesService } from 'src/app/services/profesionales.service';
import { SkillsService } from 'src/app/services/skills.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profesional-formulario',
  templateUrl: './profesional-formulario.component.html',
  styleUrls: ['./profesional-formulario.component.scss'],
})
export class ProfesionalFormularioComponent implements OnInit {
  formularioCompany: FormGroup;
  formularioJobOffer: FormGroup;
  formularioLanguage: FormGroup;
  formularioSkill: FormGroup;

  skills: Skill[];
  languages: Language[];
  company: Company;
  jobOffer: Joboffer[];

  constructor(
    private router: Router,
    private skillService: SkillsService,
    private companyService: ProfesionalesService,
    private jobOfferService: JobOfferService,
    private languageService: LanguagesService
  ) {
    this.skills = [];
    this.languages = [];

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
    });

    // FORMULARIO Job Offer
    this.formularioJobOffer = new FormGroup({
      function_department: new FormControl(),
      responsabilities: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      starting_date: new FormControl(),
      hour_week: new FormControl(),
    });

    // FORMULARIO Skill
    this.formularioSkill = new FormGroup({
      skill: new FormControl(),
    });

    // FORMULARIO Language
    this.formularioLanguage = new FormGroup({
      language: new FormControl(),
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      this.skills = await this.skillService.getAll();
      // console.log(this.skills);
    } catch (error) {
      console.log(error);
    }
    try {
      this.languages = await this.languageService.getAll();
      // console.log(this.languages);
    } catch (error) {
      console.log(error);
    }
  }

  async onSubmitCompany(): Promise<void> {
    /*    if (company.detalle == true) {

         update

       } else {
         create
       } */
    const response = await this.companyService.insert(
      this.formularioCompany.value
    );
    console.log(response);
  }

  async onSubmitJobOffer(): Promise<void> {
    const response = await this.jobOfferService.insert(
      this.formularioJobOffer.value
    );
    console.log(response);
  }

  async onSubmitSkill(): Promise<void> {
    const response = await this.skillService.insert(this.formularioSkill.value);
    console.log(response);
  }

  async onSubmitLanguage(): Promise<void> {
    const response = await this.languageService.insert(
      this.formularioLanguage.value
    );
    console.log(response);
  }

  active = 1;
}
