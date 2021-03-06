import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpersonaComponent } from './components/about/editpersona.component';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NewEducacionComponent } from './components/education/new-educacion.component';
import { HomeComponent } from './components/home/home.component';
import { EdithabilidadComponent } from './components/hrdy-sftskills/edithabilidad.component';
import { NewhabilidadComponent } from './components/hrdy-sftskills/newhabilidad.component';
import { EditExperienciaComponent } from './components/jobs/edit-experiencia.component';
import { NewExperienciaComponent } from './components/jobs/new-experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/projects/editproyecto.component';
import { NewproyectoComponent } from './components/projects/newproyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexpe', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'neweducacion', component: NewEducacionComponent},
  {path:'editeducacion/:id', component: EditEducacionComponent},
  {path:'editpersona/:id', component: EditpersonaComponent},
  {path:'newhabilidad', component: NewhabilidadComponent},
  {path:'edithabilidad/:id', component: EdithabilidadComponent},
  {path:'newproyecto', component: NewproyectoComponent},
  {path:'editproyecto/:id', component: EditproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
