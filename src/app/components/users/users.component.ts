import { Component, OnInit } from '@angular/core';
import { Freelance } from '../../interfaces/freelance';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  allFreelances: Freelance[];

  constructor(private usersService: UsersService) {

    this.allFreelances = [];
  }

  async ngOnInit() {

    try {
      this.allFreelances = await this.usersService.getAll();
      console.log(this.allFreelances);

    } catch (error) {

      console.log(error);

    }
  }
}
