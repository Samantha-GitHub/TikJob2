import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobOfferService } from 'src/app/services/job-offer.service';
import { Joboffer } from 'src/app/interfaces/job_offer';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  search: String;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  // searchValue() {
  //   const reasch = this.router.navigate(['search', this.search]);
  //   console.log(reasch);
  // }

  // searchTitle(): Promise<any> {
  //   this.jobOfferService.searchData(this.title)(
  //     (data) => {
  //       this.tutorials = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }



  searchTitle(): void {
    this.router.navigate(['search', this.search]);
  }
}
