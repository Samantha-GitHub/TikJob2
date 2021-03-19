import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'src/app/interfaces/course';
import { Education } from 'src/app/interfaces/education';
import { Language } from 'src/app/interfaces/language';
import { Skill } from 'src/app/interfaces/skill';
import { CoursesService } from 'src/app/services/courses.service';
import { EducationsService } from 'src/app/services/educations.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { ProfesionalExperienceService } from 'src/app/services/profesional-experiences.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-user-formulario',
  templateUrl: './user-formulario.component.html',
  styleUrls: ['./user-formulario.component.scss'],
})
export class UserFormularioComponent implements OnInit {
  formularioFreelancer: FormGroup;
  formularioSkill: FormGroup;
  formularioLanguage: FormGroup;
  formularioCourse: FormGroup;
  formularioEducation: FormGroup;
  formularioProfesionalExperience: FormGroup;

  skills: Skill[];
  languages: Language[];
  courses: Course[];
  educations: Education[];

  constructor(
    private router: Router,
    private skillService: SkillsService,
    private languageService: LanguagesService,
    private educationService: EducationsService,
    private profesionalExperience: ProfesionalExperienceService,
    private coursesService: CoursesService
  ) {
    this.skills = [];
    this.languages = [];

    // FORMULARIO FREELANCER
    this.formularioFreelancer = new FormGroup({
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
    });

    // FORMULARIO Skill
    this.formularioSkill = new FormGroup({
      skill: new FormControl(),
    });

    // FORMULARIO Language
    this.formularioLanguage = new FormGroup({
      language: new FormControl(),
    });

    // FORMULARIO Course
    this.formularioCourse = new FormGroup({
      course_title: new FormControl(),
      institution: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      course_link: new FormControl(),
      start_date: new FormControl(),
      end_date: new FormControl(),
    });

    // FORMULARIO Education
    this.formularioEducation = new FormGroup({
      degree: new FormControl(),
      school: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      start_date: new FormControl(),
      end_date: new FormControl(),
    });

    // FORMULARIO Profesional Experience
    this.formularioProfesionalExperience = new FormGroup({
      employer: new FormControl(),
      job_title: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      start_date: new FormControl(),
      end_date: new FormControl(),
      company_link: new FormControl(),
      description: new FormControl(),
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      this.skills = await this.skillService.getAll();
      console.log(this.skills);
    } catch (error) {
      console.log(error);
    }
    try {
      this.languages = await this.languageService.getAll();
      console.log(this.languages);
    } catch (error) {
      console.log(error);
    }
  }

  async onSubmitFreelancer(): Promise<void> {
    /*    if (company.detalle == true) {

         update

       } else {
         create
       } */
    //   const response = await this.companyService.insert(this.formulario.value);
  }

  async onSubmitSkill(): Promise<void> {
    //   const response = await this.skillService.insert(this.formulario.value);
  }

  async onSubmitLanguage(): Promise<void> {
    //   const response = await this.languageService.insert(this.formulario.value);
  }

  active = 1;
}
