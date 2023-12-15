import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ListSmartphoneComponent } from './list-smartphone/list-smartphone.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { ListMonitorComponent } from './list-monitor/list-monitor.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ListPrinterComponent } from './list-printer/list-printer.component';
import { PrinterComponent } from './printer/printer.component';
import { ListLaptopComponent } from './list-laptop/list-laptop.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ListKeyboardComponent } from './list-keyboard/list-keyboard.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ListSpeakerComponent } from './list-speaker/list-speaker.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { ListMouseComponent } from './list-mouse/list-mouse.component';
import { MouseComponent } from './mouse/mouse.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './product.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    CatalogComponent,
    ListSmartphoneComponent,
    SmartphoneComponent,
    ListMonitorComponent,
    MonitorComponent,
    ListPrinterComponent,
    PrinterComponent,
    ListLaptopComponent,
    LaptopComponent,
    ListKeyboardComponent,
    KeyboardComponent,
    ListSpeakerComponent,
    SpeakerComponent,
    ListMouseComponent,
    MouseComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
