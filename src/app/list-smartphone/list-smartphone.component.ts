import { Component, OnInit } from '@angular/core';
import { Product } from 'src/classes/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-smartphone',
  templateUrl: './list-smartphone.component.html',
  styleUrls: ['./list-smartphone.component.css']
})
export class ListSmartphoneComponent implements OnInit {

  ProductArray! : Product[];

  constructor(
    public prdService: ProductService
  ) { 
    this.ProductArray = this.prdService.getSmartphone();
  }

  ngOnInit(): void {
    
  }

}