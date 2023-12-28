import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { CardComponent } from './card/card.component';
import { HomeVendorComponent } from './home-vendor/home-vendor.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login-form', component: LoginComponent},
  {path:'registration-form', component: RegistrationComponent}, 
  {path:'keyboard/:id',component: CardComponent},
  {path:'home-vendor',component: HomeVendorComponent},
  {path:'addProduct',component: AddProductComponent} 
 
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
