import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/interfaces/company';
import { Joboffer } from 'src/app/interfaces/job_offer';
import { Language } from 'src/app/interfaces/language';
import { Skill } from 'src/app/interfaces/skill';
import { JobOfferService } from 'src/app/services/job-offer.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { ProfesionalesService } from 'src/app/services/profesionales.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-job-offer-view',
  templateUrl: './job-offer-view.component.html',
  styleUrls: ['./job-offer-view.component.scss'],
})
export class JobOfferViewComponent implements OnInit {
  jobOffer: Joboffer;
  skills: Skill[];
  languages: Language[];
  company: Company;

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobOfferService: JobOfferService,
    private skillsService: SkillsService,
    private languageService: LanguagesService,
    private companyService: ProfesionalesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      (this.jobOffer = await this.jobOfferService.getById(params.idJobOffer)),
        (this.skills = await this.skillsService.getSkillsByIdJobsOffers(
          params.idJobOffer
        )),
        (this.languages = await this.languageService.getLanguagesByIdJobsOffers(
          params.idJobOffer
        ));

    });
  }
}
