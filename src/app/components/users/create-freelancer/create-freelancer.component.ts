import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Language } from 'src/app/interfaces/language';
import { Skill } from 'src/app/interfaces/skill';
import { LanguagesService } from 'src/app/services/languages.service';
import { SkillsService } from 'src/app/services/skills.service';
import { TbiLanguagessUsuarioService } from 'src/app/services/tbi-languages-usuario.service';
import { TbiSkillsUsuarioService } from 'src/app/services/tbi-skills-usuario.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-freelancer',
  templateUrl: './create-freelancer.component.html',
  styleUrls: ['./create-freelancer.component.scss'],
})
export class CreateFreelancerComponent implements OnInit {
  active = 1;
  files;
  skills: Skill[];
  languages: Language[];
  formularioFreelancer: FormGroup;

  constructor(
    private router: Router,
    private skillService: SkillsService,
    private languageService: LanguagesService,
    private freelancerService: UsersService,
    private tbiSkillFreelance: TbiSkillsUsuarioService,
    private tbiLanguageFreelance: TbiLanguagessUsuarioService
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

  async ngOnInit(): Promise<any> {
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

  async onSubmitFreelancer(): Promise<any> {
    try {
      console.log(this.formularioFreelancer.value);

      // Destructuring llamamos la variable igual a la propriedad del objeto
      const { language, skill } = this.formularioFreelancer.value;

      // Destructuring llamamos la variable igual a la propriedad del objeto
      // const { language, skill } = this.formularioFreelancer.value;

      const freelance = await this.freelancerService.create(
        this.formularioFreelancer.value
      );
      console.log(freelance);

      if (freelance.insertId) {
        // A Language
        language.forEach(async (oneLanguage) => {
          const lang = await this.tbiLanguageFreelance.create({
            language: oneLanguage,
            freelance: freelance.insertId,
          });
          console.log('yo this is lang', lang);
        });

        // A skill
        skill.forEach(async (oneSkill) => {
          const ski = await this.tbiSkillFreelance.create({
            skill: oneSkill,
            freelance: freelance.insertId,
          });
          console.log('yo this is skills', ski);
        });
      }
      // ROUTING TO FORM
      this.router.navigate(['/loginfreelance']);
    } catch (error) {
      console.log(error);
    }
  }

  /* // HANDLE FILES
  onSubmitFreelancer(): void {
    // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
    let fd: FormData = new FormData();
    fd.append('image', this.files[0]);
    fd.append('username', this.formularioFreelancer.value.username);
    fd.append('password', this.formularioFreelancer.value.password);
    fd.append('firstname', this.formularioFreelancer.value.firstname);
    fd.append('lastname', this.formularioFreelancer.value.lastname);
    fd.append('email', this.formularioFreelancer.value.email);
    fd.append('phone', this.formularioFreelancer.value.phone);
    fd.append('gender', this.formularioFreelancer.value.gender);
    fd.append('country', this.formularioFreelancer.value.country);
    fd.append('city', this.formularioFreelancer.value.city);
    fd.append('zipcode', this.formularioFreelancer.value.zipcode);
    fd.append('streetName', this.formularioFreelancer.value.streetName);
    fd.append('website', this.formularioFreelancer.value.website);
    fd.append('video', this.formularioFreelancer.value.video);
    fd.append('job_title', this.formularioFreelancer.value.job_title);
    fd.append('profile', this.formularioFreelancer.value.profile);
    // fd.append('skill', this.formularioFreelancer.value.lastname);
    // fd.append('language', this.formularioFreelancer.value.lastname);

    // Delegamos el envío del formulario en el servicio
    this.freelancerService.createPic(fd).then((result) => {
      this.router.navigate(['']);
      console.log(result);
    });
  }

  onChange($event): void {
    this.files = $event.target.files;
    console.log('$event', $event.target.files);
  } */
}
