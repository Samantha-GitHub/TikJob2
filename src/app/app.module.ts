import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
