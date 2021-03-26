import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Freelance } from 'src/app/interfaces/freelance';
import { Joboffer } from 'src/app/interfaces/job_offer';
import { JobOfferService } from 'src/app/services/job-offer.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobOffers: Joboffer[];
  freelancers: Freelance[];

  constructor(
    private jobOfferService: JobOfferService,
    private router: Router,
    private freelancerService: UsersService) {

    this.jobOffers = [];
    this.freelancers = [];
  }

  async ngOnInit() {

    try {
      this.jobOffers = await this.jobOfferService.getAll();
      this.freelancers = await this.freelancerService.getAll();

      // console.log(this.jobOffers);
    } catch (error) {
      console.log(error);
    }
  }
  getJobOffer(pId): void {
    this.router.navigate(['job_offers', pId]);
  }

  getFreelance(pId): any {
    this.router.navigate(['freelance', pId]);
  }
}
