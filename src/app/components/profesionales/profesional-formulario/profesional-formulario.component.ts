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
import { TbiSkillOfertasTrabajosService } from 'src/app/services/tbi-skill-ofertas-trabajos.service';
import { TbiLanguageOfertasTrabajosService } from 'src/app/services/tbi-language-ofertas-trabajos.service';

declare var Swal;

@Component({
  selector: 'app-profesional-formulario',
  templateUrl: './profesional-formulario.component.html',
  styleUrls: ['./profesional-formulario.component.scss'],
})
export class ProfesionalFormularioComponent implements OnInit {
  active = 1;
  public page: number;
  // FORM GROUP
  formularioCompany: FormGroup;
  formularioJobOffer: FormGroup;
  formularioLanguage: FormGroup;
  formularioSkill: FormGroup;
  // END FORM GROUP

  skills: Skill[];
  languages: Language[];
  company: Company;
  jobOffers: Joboffer[];

  constructor(
    private router: Router,

    private skillService: SkillsService,
    private companyService: ProfesionalesService,
    private jobOfferService: JobOfferService,
    private languageService: LanguagesService,
    private tbi_ofertas_skill_Service: TbiSkillOfertasTrabajosService,
    private tbi_languages_ofertas_trabajosService: TbiLanguageOfertasTrabajosService
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
      username: new FormControl(),
      password: new FormControl(),
    });

    // FORMULARIO Job Offer
    this.formularioJobOffer = new FormGroup({
      function_department: new FormControl(),
      responsabilities: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      starting_date: new FormControl(),
      hour_week: new FormControl(),
      skill: new FormControl(),
      language: new FormControl(),
    });
  }

  async ngOnInit(): Promise<void> {
    // getAll() de skills en el select
    try {
      this.skills = await this.skillService.getAll();
      // console.log(this.skills);
    } catch (error) {
      console.log(error);
    }

    // getAll() de languages en el select
    try {
      this.languages = await this.languageService.getAll();
      /* console.log(this.languages); */
    } catch (error) {
      console.log(error);
    }

    this.company = await this.companyService.getByIdToken();
    console.log('log de company', this.company);

    this.jobOffers = this.company.jobOffer;
    console.log('log de ofertas que se tienen que pintar', this.jobOffers);

    this.formularioCompany = new FormGroup({
      name_company: new FormControl(this.company.name_company),
      phone: new FormControl(this.company.phone),
      vat: new FormControl(this.company.vat),
      street: new FormControl(this.company.street),
      city: new FormControl(this.company.city),
      zip_code: new FormControl(this.company.zip_code),
      country: new FormControl(this.company.country),
      website: new FormControl(this.company.website),
      image: new FormControl(),
      email: new FormControl(this.company.email),
      employees_number: new FormControl(this.company.employees_number),
      year_founded: new FormControl(this.company.year_founded),
      username: new FormControl(this.company.username),
      password: new FormControl(this.company.password),
    });
  }

  /*                START
  onSubmit/Update de Company, JobOffer, Skills and Languages */

  async onSubmitCompany(): Promise<any> {
    const company = await this.companyService.update(
      this.formularioCompany.value
    );

    console.log('this is updated freelance', company);
    this.router.navigate(['company/profile']);
  }

  async onSubmitJobOffer(): Promise<any> {
    // recibo datos del form
    console.log('log value formularioJobOffer', this.formularioJobOffer.value);

    // Destructuring llamamos la variable igual a la propriedad del objeto
    const { language, skill } = this.formularioJobOffer.value;

    // Envio los valores del form a jobOffer
    const ofertas = await this.jobOfferService.insert(
      this.formularioJobOffer.value
    );
    console.log('log de ofertas', ofertas);

    if (ofertas.insertId) {
      // A Language

      language.forEach(async (oneLanguage) => {
        const lang = await this.tbi_languages_ofertas_trabajosService.create({
          language: oneLanguage,
          job_offer: ofertas.insertId,
        });
      });
      // A skill

      skill.forEach(async (oneSkill) => {
        const ski = await this.tbi_ofertas_skill_Service.insert({
          skill: oneSkill,
          job_offer: ofertas.insertId,
        });
        console.log(ski);
      });
    }
  }

  /*                  END
  onSubmit de Company, JobOffer, Skills and Languages */

  // Delete job Offer

  deleteJobOffer(pJobOfferId) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteoffer = await this.jobOfferService.deleteByIdToken(
          pJobOfferId
        );
        console.log(deleteoffer);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  async deleteCompany(): Promise<any> {
    const deleteoffer = await this.companyService.delete();
    console.log(deleteoffer);
  }

  refresh(): void {
    window.location.reload();
  }
}
