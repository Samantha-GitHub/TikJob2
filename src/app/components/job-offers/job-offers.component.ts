import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joboffer } from 'src/app/interfaces/job_offer';
import { Company } from 'src/app/interfaces/company';
import { JobOfferService } from 'src/app/services/job-offer.service';
import { ProfesionalesService } from 'src/app/services/profesionales.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.scss'],
})
export class JobOffersComponent implements OnInit {
  public page: number;

  jobOffers: any;
  companies: Company[];
  searchJob: any;

  constructor(
    private jobOfferService: JobOfferService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private companyService: ProfesionalesService
  ) {
    this.jobOffers = [];
    this.searchJob = [];
  }

  async ngOnInit() {
    try {
      this.jobOffers = await this.jobOfferService.getAll();
    } catch (error) {
      console.log(error);
    }
  }

  getJobOffer(pId): void {
    this.router.navigate(['job_offers', pId]);
  }
}
