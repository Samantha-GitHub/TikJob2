import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joboffer } from 'src/app/interfaces/job_offer';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.scss'],
})
export class JobOffersComponent implements OnInit {
  public page: number;

  jobOffers: Joboffer[];

  constructor(
    private jobOfferService: JobOfferService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.jobOffers = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      if (Object.entries(params).length > 0) {
        this.jobOffers = await this.jobOfferService.searchData(params.country);
        console.log(params);
      } else {
        try {
          this.jobOffers = await this.jobOfferService.getAll();
          // console.log(this.jobOffers);
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  getJobOffer(pId) {
    this.router.navigate(['job_offers', pId]);
  }
}
