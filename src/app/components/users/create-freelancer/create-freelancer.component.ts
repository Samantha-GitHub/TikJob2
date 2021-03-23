import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Language } from 'src/app/interfaces/language';
import { Skill } from 'src/app/interfaces/skill';
import { LanguagesService } from 'src/app/services/languages.service';
import { SkillsService } from 'src/app/services/skills.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-freelancer',
  templateUrl: './create-freelancer.component.html',
  styleUrls: ['./create-freelancer.component.scss'],
})
export class CreateFreelancerComponent implements OnInit {
  active = 1;
  skills: Skill[];
  languages: Language[];
  formularioFreelancer: FormGroup;
  constructor(
    private router: Router,
    private skillService: SkillsService,
    private languageService: LanguagesService,
    private freelancerService: UsersService
  ) {
    // FORMULARIO FREELANCER
    this.formularioFreelancer = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      gender: new FormControl(),
      country: new FormControl(),
      city: new FormControl(),
      zipcode: new FormControl(),
      streetName: new FormControl(),
      website: new FormControl(),
      image: new FormControl(),
      video: new FormControl(),
      job_title: new FormControl(),
      profile: new FormControl(),
      skill: new FormControl(),
      language: new FormControl(),
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      this.skills = await this.skillService.getAll();
      // console.log(this.skills);
    } catch (error) {
      console.log(error);
    }
    try {
      this.languages = await this.languageService.getAll();
      // console.log(this.languages);
    } catch (error) {
      console.log(error);
    }
  }

  async onSubmitFreelancer(): Promise<void> {
    console.log(this.formularioFreelancer.value);
    const { language, skill } = this.formularioFreelancer.value;
    // console.log(language);
    // console.log(skill);
    this.formularioFreelancer.value.image = 'http';
    this.formularioFreelancer.value.video = 'http';

    const freelancer = await this.freelancerService.create(
      this.formularioFreelancer.value
    );
    console.log(freelancer);

    // const lang = await this.freelancerService.create(language.id);
    // console.log(lang);

    // const ski = await this.freelancerService.create(skill.id);
    // console.log(ski);

    // if id insert exists then i do the db intro

    // ROUTING TO FORM
    this.router.navigate(['freelance/edit/', freelancer.insertId]);
  }
}
