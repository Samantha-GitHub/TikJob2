import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Freelance } from '../../interfaces/freelance';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public page: number;

  allFreelancers: Freelance[];

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute,) {
    this.allFreelancers = [];
  }

  async ngOnInit(): Promise<void> {

    this.activatedRoute.params.subscribe(async (params) => {
      console.log(params);

      if (Object.entries(params).length > 0) {
        this.allFreelancers = await this.usersService.searchData(params.data);
        console.log(params);
      } else {
        try {
          this.allFreelancers = await this.usersService.getAll();
          console.log(this.allFreelancers);
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  getFreelance(pId): any {
    this.router.navigate(['freelance', pId]);
  }
}
