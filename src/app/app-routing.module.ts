import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login-form', component: LoginComponent},
  {path:'registration-form', component: RegistrationComponent}, 
  {path:'keyboard/:id',component: CardComponent} 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
