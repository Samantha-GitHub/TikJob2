import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfesionalFormularioComponent } from './components/profesionales/profesional-formulario/profesional-formulario.component';
import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { UserFormularioComponent } from './components/users/user-formulario/user-formulario.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [

  { path: "", pathMatch: "full", redirectTo: 'home' },
  { path: "home", component: HomeComponent },
  { path: "home", component: HeroComponent },
  { path: "freelance", component: UsersComponent },
  { path: "form_freelance", component: UserFormularioComponent },
  { path: "profesional", component: ProfesionalesComponent },
  { path: "form_profesional", component: ProfesionalFormularioComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
