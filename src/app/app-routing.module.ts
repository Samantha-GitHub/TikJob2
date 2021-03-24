import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { JobOfferViewComponent } from './components/job-offers/job-offer-view/job-offer-view.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { LogincompanyComponent } from './components/login/logincompany/logincompany.component';
import { LoginfreelancerComponent } from './components/login/loginfreelancer/loginfreelancer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateCompanyComponent } from './components/profesionales/create-company/create-company.component';
import { ProfesionalFormularioComponent } from './components/profesionales/profesional-formulario/profesional-formulario.component';
/* import { ProfesionalViewComponent } from './components/profesionales/profesional-view/profesional-view.component';*/
import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { CreateFreelancerComponent } from './components/users/create-freelancer/create-freelancer.component';
import { UserFormularioComponent } from './components/users/user-formulario/user-formulario.component';
import { UserViewComponent } from './components/users/user-view/user-view.component';
import { UsersComponent } from './components/users/users.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'home', component: HeroComponent },
  // ALL FREELANCERS
  { path: 'freelance', component: UsersComponent },
  // VIEW FREELANCE BY ID
  { path: 'freelance/:idFreelance', component: UserViewComponent },
  // LOGIN FREELANCER
  { path: 'loginfreelance', component: LoginfreelancerComponent },
  // CREATE A FREELANCER
  { path: 'form_freelance', component: CreateFreelancerComponent },
  // EDIT/ADD CONTENT TO A FREELANCER
  {
    path: 'freelance/edit/:idFreelance',
    component: UserFormularioComponent,
  },

  // ALL COMPANIES
  { path: 'companies', component: ProfesionalesComponent },
  // LOGIN COMPANY
  { path: 'logincompany', component: LogincompanyComponent },
  // CREATE A COMPANY
  { path: 'form_company', component: CreateCompanyComponent },
  // EDIT/ADD CONTENT TO A COMPANY
  {
    path: 'company/profile',
    component: ProfesionalFormularioComponent, canActivate: [LoginGuard]
  },
  // ALL JOB OFFERS
  { path: 'job_offers', component: JobOffersComponent },
  // SEARCH FOR JOB OFFERS
  { path: 'search/:data', component: JobOffersComponent },
  // VIEW ONE JOB OFFER
  { path: 'job_offers/:idJobOffer', component: JobOfferViewComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
