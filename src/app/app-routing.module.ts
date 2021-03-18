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
import { ProfesionalFormularioComponent } from './components/profesionales/profesional-formulario/profesional-formulario.component';
/* import { ProfesionalViewComponent } from './components/profesionales/profesional-view/profesional-view.component';*/
import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { UserFormularioComponent } from './components/users/user-formulario/user-formulario.component';
import { UserViewComponent } from './components/users/user-view/user-view.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'home', component: HeroComponent },
  { path: 'freelance', component: UsersComponent },
  { path: 'freelance/:idFreelance', component: UserViewComponent },
  { path: 'loginfreelance', component: LoginfreelancerComponent },
  { path: 'form_freelance', component: UserFormularioComponent },
  { path: 'profesional', component: ProfesionalesComponent },
  { path: 'job_offers', component: JobOffersComponent },
  { path: 'job_offers/:idJobOffer', component: JobOfferViewComponent },
  { path: 'logincompany', component: LogincompanyComponent },
  /*   { path: 'profesional/:profesional_vat', component: ProfesionalViewComponent },
   */ { path: 'form_profesional', component: ProfesionalFormularioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
