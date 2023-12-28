import { Component, OnInit } from '@angular/core';
import { Product } from 'src/classes/Product';
import { VendorServiceService } from '../vendor-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vendor-product-list',
  templateUrl: './vendor-product-list.component.html',
  styleUrls: ['./vendor-product-list.component.css']
})
export class VendorProductListComponent implements OnInit {

  usernameVendor: string = ''; // Dichiarazione della variabile
  vendorProducts: Product[] = [];

  constructor(private vendorService: VendorServiceService, private cookieService: CookieService) { }

  cookieUsername = this.cookieService.get('username');

  ngOnInit(): void {
    this.usernameVendor = this.cookieUsername;

    this.vendorService.getAllVendorProducts(this.usernameVendor).subscribe(
      products => {
        // Puoi gestire i dati ottenuti dalla chiamata qui
        this.vendorProducts = products;
        console.log('Vendor products:', this.vendorProducts);
      },
      (error) => {
        console.error('Error fetching vendor products:', error);
      }
    );
  }
}
