import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
// COMPONENTS
import { AppComponent } from './app.component';
import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfesionalFormularioComponent } from './components/profesionales/profesional-formulario/profesional-formulario.component';
import { UsersComponent } from './components/users/users.component';
import { UserFormularioComponent } from './components/users/user-formulario/user-formulario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { ProfesionalViewComponent } from './components/profesionales/profesional-view/profesional-view.component';
import { LogincompanyComponent } from './components/login/logincompany/logincompany.component';
import { LoginfreelancerComponent } from './components/login/loginfreelancer/loginfreelancer.component';
import { UserViewComponent } from './components/users/user-view/user-view.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { JobOfferViewComponent } from './components/job-offers/job-offer-view/job-offer-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfertasFormularioComponent } from './components/profesionales/ofertas-formulario/ofertas-formulario.component';

import { CreateFreelancerComponent } from './components/users/create-freelancer/create-freelancer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeroComponent,
    NavBarComponent,
    NotFoundComponent,
    ProfesionalesComponent,
    ProfesionalFormularioComponent,
    UsersComponent,
    UserFormularioComponent,
    HomeComponent,
    ProfesionalViewComponent,
    LogincompanyComponent,
    LoginfreelancerComponent,
    UserViewComponent,
    JobOffersComponent,
    JobOfferViewComponent,
    OfertasFormularioComponent,
    CreateFreelancerComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
