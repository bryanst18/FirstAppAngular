import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './componentes/home/home.component';
import {ErrorPageComponent} from './componentes/error-page/error-page.component';
import {LoginComponent} from './componentes/login/login.component';
import {PrivateComponent} from './componentes/private/private.component';
import {RegisterComponent } from './componentes/register/register.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'privado', component: PrivateComponent},
  {path:'registro', component: RegisterComponent},
  {path:'**', component: ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
