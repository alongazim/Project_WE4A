import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { CardComponent } from './card/card.component';
import { HomeVendorComponent } from './home-vendor/home-vendor.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MonitorComponent } from './monitor/monitor.component';
import { MouseComponent } from './mouse/mouse.component';
import { PrinterComponent } from './printer/printer.component';
import { ProductComponent } from './product/product.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { LaptopComponent } from './laptop/laptop.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login-form', component: LoginComponent},
  {path:'registration-form', component: RegistrationComponent}, 
  {path:'keyboard/:id',component: CardComponent},
  {path:'home-vendor',component: HomeVendorComponent},
  {path:'addProduct',component: AddProductComponent}, 
  {path:'laptop',component: LaptopComponent},
  {path:'keyboard',component: KeyboardComponent},
  {path:'monitor',component: MonitorComponent},
  {path:'mouse',component: MouseComponent},
  {path:'printer',component: PrinterComponent},
  {path:'product',component: ProductComponent},
  {path:'smartphone',component: SmartphoneComponent},
  {path:'speaker',component: SpeakerComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
