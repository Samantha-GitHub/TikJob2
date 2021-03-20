import { Component, OnInit } from '@angular/core';
import { Joboffer } from 'src/app/interfaces/job_offer';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.scss']
})
export class JobOffersComponent implements OnInit {

  public page: number;

  allJobOffers: Joboffer[];

  constructor(private jobOfferService: JobOfferService) {

    this.allJobOffers = [];
  }

  async ngOnInit() {

    try {
      this.allJobOffers = await this.jobOfferService.getAll();
      console.log(this.allJobOffers);

    } catch (error) {

      console.log(error);

    }
  }
}
