import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeVendorComponent } from './home-vendor/home-vendor.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { VendorProductListComponent } from './vendor-product-list/vendor-product-list.component';


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
    HomeComponent,
    CardComponent,
    HomeVendorComponent,
    AddProductComponent,
    ProductComponent,
    VendorProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    HttpClientModule,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
