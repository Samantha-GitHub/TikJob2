import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormularioComponent } from './components/profesionales/formulario/formulario.component';
import { UsersComponent } from './components/users/users.component';
import { HeroComponent } from './components/hero/hero.component';
import { UserFormularioComponent } from './components/users/user-formulario/user-formulario.component';
import { ProfesionalFormularioComponent } from './components/profesionales/profesional-formulario/profesional-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesionalesComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent,
    FormularioComponent,
    UsersComponent,
    HeroComponent,
    UserFormularioComponent,
    ProfesionalFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
