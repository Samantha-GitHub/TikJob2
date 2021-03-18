import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Freelance } from 'src/app/interfaces/freelance';
import { CoursesService } from 'src/app/services/courses.service';
import { EducationsService } from 'src/app/services/educations.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  freelance: Freelance;

  constructor(
    private activateRoute: ActivatedRoute,
    private usersService: UsersService,
    private coursesService: CoursesService,
    private languagesService: LanguagesService,
    /*  private profesionalExperienceService: , */
    private educationService: EducationsService

  ) { }

  ngOnInit() {

    this.activateRoute.params.subscribe(async params => {


      this.freelance = await this.usersService.getById(params.idFreelance);
      console.log(this.freelance);

    })
  }

}
