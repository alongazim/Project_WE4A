import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/classes/Product';

@Component({
  selector: 'app-list-laptop',
  templateUrl: './list-laptop.component.html',
  styleUrls: ['./list-laptop.component.css']
})
export class ListLaptopComponent implements OnInit {

  ProductArray! : Product[];

  constructor(
    public prdService: ProductService
  ) { 
    this.ProductArray = this.prdService.getLaptops();
  }

  ngOnInit(): void {
    
  }

}
