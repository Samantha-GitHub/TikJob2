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

  freelancers: Freelance[];

  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.freelancers = [];
  }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(async (params) => {
      if (Object.entries(params).length > 0) {
        this.freelancers = await this.usersService.searchFreelanceEducation(
          params.data
        );
      } else {
        try {
          this.freelancers = await this.usersService.getAll();
          console.log(this.freelancers);
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
