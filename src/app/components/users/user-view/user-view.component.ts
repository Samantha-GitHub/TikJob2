import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private usersService: UsersService,
    private coursesService: CoursesService,
    private languagesService: LanguagesService,

  ) { }

  ngOnInit(): void {
  }

}
