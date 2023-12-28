import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../vendor-service.service';
import { Product } from 'src/classes/Product';

@Component({
  selector: 'app-home-vendor',
  templateUrl: './home-vendor.component.html',
  styleUrls: ['./home-vendor.component.css']
})
export class HomeVendorComponent implements OnInit {

  ngOnInit(): void {
  }
}
