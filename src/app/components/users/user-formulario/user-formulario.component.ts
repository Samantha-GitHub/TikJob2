import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { Education } from 'src/app/interfaces/education';
import { Freelance } from 'src/app/interfaces/freelance';
import { Language } from 'src/app/interfaces/language';
import { Skill } from 'src/app/interfaces/skill';
import { ProfesionalExperience } from 'src/app/interfaces/professional-experience';
import { CoursesService } from 'src/app/services/courses.service';
import { EducationsService } from 'src/app/services/educations.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { ProfesionalExperienceService } from 'src/app/services/profesional-experiences.service';
import { SkillsService } from 'src/app/services/skills.service';
import { UsersService } from 'src/app/services/users.service';
import { TbiSkillsUsuarioService } from 'src/app/services/tbi-skills-usuario.service';
import { TbiLanguagessUsuarioService } from 'src/app/services/tbi-languages-usuario.service';

declare var Swal;

@Component({
  selector: 'app-user-formulario',
  templateUrl: './user-formulario.component.html',
  styleUrls: ['./user-formulario.component.scss'],
})
export class UserFormularioComponent implements OnInit {
  active = 1;
  files;
  public page: number;
  // FORM GROUP
  formularioFreelancer: FormGroup;
  // formularioSkill: FormGroup;
  // formularioLanguage: FormGroup;
  formularioCourse: FormGroup;
  formularioEducation: FormGroup;
  formularioProfesionalExperience: FormGroup;

  freelancer: Freelance;
  skill: Skill;
  language: Language;
  course: Course;
  education: Education;
  profesionalExperience: ProfesionalExperience;

  profesionalExperiences: ProfesionalExperience[];
  skills: Skill[];
  languages: Language[];
  courses: Course[];
  educations: Education[];
  degree: Education[];

  constructor(
    private router: Router,

    private freelancerService: UsersService,
    private skillService: SkillsService,
    private languageService: LanguagesService,
    private educationService: EducationsService,
    private profesionalExperienceService: ProfesionalExperienceService,
    private coursesService: CoursesService,
    private tbiSkillFreelance: TbiSkillsUsuarioService,
    private tbiLanguageFreelance: TbiLanguagessUsuarioService
  ) {
    this.skills = [];
    this.languages = [];
    this.educations = [];
    this.degree = [];

    // FORMULARIO FREELANCER
    this.formularioFreelancer = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ]),
      gender: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      streetName: new FormControl('', [Validators.required]),
      website: new FormControl(),
      image: new FormControl(),
      video: new FormControl(),
      job_title: new FormControl('', [Validators.required]),
      profile: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(100),
      ]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl(),
      // skill: new FormControl(),
      // language: new FormControl(),
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
      description: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(300),
      ]),
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

    // Get info freelancer by Id
    this.freelancer = await this.freelancerService.getByIdToken();
    console.log('this is freelancers', this.freelancer);
    this.courses = this.freelancer.courses;
    this.educations = this.freelancer.education;
    this.profesionalExperiences = this.freelancer.profesional_experience;
    this.languages = this.freelancer.languages;
    this.skills = this.freelancer.skills;
    // console.log(this.courses);

    // FORM CONTENT
    this.formularioFreelancer = new FormGroup({
      firstname: new FormControl(this.freelancer.firstname),
      lastname: new FormControl(this.freelancer.lastname),
      email: new FormControl(this.freelancer.email),
      phone: new FormControl(this.freelancer.phone),
      gender: new FormControl(this.freelancer.gender),
      country: new FormControl(this.freelancer.country),
      city: new FormControl(this.freelancer.city),
      zipcode: new FormControl(this.freelancer.zipcode),
      streetName: new FormControl(this.freelancer.streetName),
      website: new FormControl(this.freelancer.website),
      image: new FormControl(this.freelancer.image),
      video: new FormControl(this.freelancer.video),
      job_title: new FormControl(this.freelancer.job_title),
      profile: new FormControl(this.freelancer.profile),
      username: new FormControl(this.freelancer.username),
      password: new FormControl(this.freelancer.password),
      skill: new FormControl(this.freelancer.skills),
      language: new FormControl(this.freelancer.languages),
    });

    /*  // FORMULARIO Course
      this.formularioCourse = new FormGroup({
        course_title: new FormControl(this.course.course_title),
        institution: new FormControl(this.course.institution),
        city: new FormControl(this.course.city),
        country: new FormControl(this.course.country),
        course_link: new FormControl(this.course.course_link),
        start_date: new FormControl(this.course.start_date),
        end_date: new FormControl(this.course.end_date),
      });

      // FORMULARIO Education
      this.formularioEducation = new FormGroup({
        degree: new FormControl(this.education.degree),
        school: new FormControl(this.education.school),
        city: new FormControl(this.education.city),
        country: new FormControl(this.education.country),
        start_date: new FormControl(this.education.start_date),
        end_date: new FormControl(this.education.end_date),
      });

      // FORMULARIO Profesional Experience
      this.formularioProfesionalExperience = new FormGroup({
        employer: new FormControl(this.profesionalExperience.employer),
        job_title: new FormControl(this.profesionalExperience.job_title),
        city: new FormControl(this.profesionalExperience.city),
        country: new FormControl(this.profesionalExperience.country),
        start_date: new FormControl(this.profesionalExperience.start_date),
        end_date: new FormControl(this.profesionalExperience.end_date),
        company_link: new FormControl(this.profesionalExperience.company_link),
        description: new FormControl(this.profesionalExperience.description),
      }); */
  }

  /*   async onSubmitFreelancer(): Promise<any> {
    // UPDATE FREELANCE  Envio los valores del form: a freelance
    const freelance = await this.freelancerService.update(
      this.formularioFreelancer.value
    );
    console.log('this is updated freelance', freelance);
    this.router.navigate(['/freelance/profile']);
  } */

  onSubmitFreelancer() {
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
    // UPDATE FREELANCE  Envio los valores del form: a freelance
    // Delegamos el envío del formulario en el servicio
    const freelancer = this.freelancerService.update(fd).then((result) => {
      // this.router.navigate(['']);
      console.log(result);
    });
    console.log('this is updated freelance', freelancer);
    // this.router.navigate(['/freelance/profile']);
  }

  onChange($event): void {
    this.files = $event.target.files;
    console.log('$event', $event.target.files);
  }

  // CREATE COURSE
  async onSubmitCourse(): Promise<any> {
    const course = await this.coursesService.create(
      this.formularioCourse.value
    );

    console.log(course);
  }

  deleteCourse(courseId) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteCourse = await this.coursesService.deleteByIdToken(
          courseId
        );
        window.location.reload();
        console.log(deleteCourse);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  // CREATE EDUCATION
  async onSubmiEducation(): Promise<any> {
    const experience = await this.educationService.create(
      this.formularioEducation.value
    );
    console.log(experience);
  }

  //  delete one education
  deleteEducation(educationId) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteEducation = await this.educationService.deleteByIdToken(
          educationId
        );
        window.location.reload();
        console.log(deleteEducation);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  // CREATE EXPERIENCE
  async onSubmitExperience(): Promise<any> {
    const experience = await this.profesionalExperienceService.create(
      this.formularioProfesionalExperience.value
    );
    console.log(experience);
  }
  // REFRESH PAGE WHEN ADD COURS/EDUCATION
  refresh(): void {
    window.location.reload();
  }

  //  delete one experience
  deleteExperience(idProfesionalExperience) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteEducation = await this.profesionalExperienceService.deleteByIdToken(
          idProfesionalExperience
        );
        window.location.reload();
        console.log(deleteEducation);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  //Log Out
  logOut() {
    localStorage.removeItem('token_tikjobs');
    this.router.navigate(['/']);
  };
}
