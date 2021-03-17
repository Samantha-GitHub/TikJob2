import { Component, OnInit } from '@angular/core';
import { Freelance } from '../../interfaces/freelance';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  allFreelancers: Freelance[];

  constructor(private usersService: UsersService) {

    this.allFreelancers = [];
  }

  async ngOnInit() {

    try {
      this.allFreelancers = await this.usersService.getAll();
      console.log(this.allFreelancers);

    } catch (error) {

      console.log(error);

    }
  }
}
