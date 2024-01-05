import { Component, OnInit } from '@angular/core';
import { Product } from 'src/classes/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-mouse',
  templateUrl: './list-mouse.component.html',
  styleUrls: ['./list-mouse.component.css']
})
export class ListMouseComponent implements OnInit {

  ProductArray! : Product[];

  constructor(
    public prdService: ProductService
  ) { 
    this.ProductArray = this.prdService.getMouse();
  }

  ngOnInit(): void {
    
  }

}
