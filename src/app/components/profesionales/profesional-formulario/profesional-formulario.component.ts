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
import { TbiSkillsUsuarioService } from 'src/app/services/tbi-skills-usuario.service';
import { TbiSkillOfertasTrabajosService } from 'src/app/services/tbi-skill-ofertas-trabajos.service';

@Component({
  selector: 'app-profesional-formulario',
  templateUrl: './profesional-formulario.component.html',
  styleUrls: ['./profesional-formulario.component.scss'],
})
export class ProfesionalFormularioComponent implements OnInit {
  //FORM GROUP
  formularioCompany: FormGroup;
  formularioJobOffer: FormGroup;
  formularioLanguage: FormGroup;
  formularioSkill: FormGroup;
  //END FORM GROUP

  skills: Skill[];
  languages: Language[];
  company: Company;
  jobOffer: Joboffer[];

  pId: number;
  newLanguage: Language;
  newSkill: Skill;

  arrLanguages: Language[];
  arrskills: Skill[];

  constructor(
    private router: Router,
    private skillService: SkillsService,
    private companyService: ProfesionalesService,
    private jobOfferService: JobOfferService,
    private languageService: LanguagesService,
    private tbi_ofertas_skill_Service: TbiSkillOfertasTrabajosService
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

    this.pId = null;

    // LocalStorage para arrLanguages

    if (localStorage.getItem('arrLanguages')) {
      const storageArray = localStorage.getItem('arrLanguages');
      this.arrLanguages = JSON.parse(storageArray);
    } else {
      this.arrLanguages = new Array();
    }

    // LocalStorage para arrSkills

    if (localStorage.getItem('arrSkills')) {
      const storageArray = localStorage.getItem('arrSkills');
      this.arrskills = JSON.parse(storageArray);
    } else {
      this.arrskills = [];
    }
  }

  async ngOnInit(): Promise<void> {
    //getAll() de skills en el select
    try {
      this.skills = await this.skillService.getAll();
      // console.log(this.skills);
    } catch (error) {
      console.log(error);
    }

    //getAll() de languages en el select
    try {
      this.languages = await this.languageService.getAll();
      console.log(this.languages);
    } catch (error) {
      console.log(error);
    }
  }

  /*                START
  onSubmit de Company, JobOffer, Skills and Languages */

  async onSubmitCompany(): Promise<void> {
    /*   if (  = false) {
        const response = await this.companyService.create(
          this.formularioCompany.value
        );
        console.log(response);
      } else {
          const update = await this.companyService.update(this.pId, this.formularioCompany.value);
          console.log(update);
      } */

    const response = await this.companyService.create(
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
    /* const response = await this.tbi_ofertas_skill_Service.insert(this.formularioSkill.value);
    console.log(response); */
  }

  async onSubmitLanguage(): Promise<void> {
    const response = await this.languageService.insert(
      this.formularioLanguage.value
    );
    console.log(response);
  }

  /*                  END
  onSubmit de Company, JobOffer, Skills and Languages */

  // onCLick del button +add Languages

  onClick() {
    console.log(this.newLanguage);

    this.arrLanguages.push(this.newLanguage);
    const arrToString = JSON.stringify(this.arrLanguages);
    localStorage.setItem('arrLanguages', arrToString);

    console.log(this.arrLanguages);

    /*   localStorage.setItem('arrLanguages', JSON.stringify(this.arrLanguages)); */
  }

  active = 1;
}
