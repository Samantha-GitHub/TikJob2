import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joboffer } from 'src/app/interfaces/job_offer';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-job-offer-view',
  templateUrl: './job-offer-view.component.html',
  styleUrls: ['./job-offer-view.component.scss']
})
export class JobOfferViewComponent implements OnInit {

  jobOffer: Joboffer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobOfferService: JobOfferService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async (params) => {

      this.jobOffer = await this.jobOfferService.getById(params.idJobOffer)
    });

  }

}
