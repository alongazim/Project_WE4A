import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/classes/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  @Input() product!:  Product;
  @Input() product_index!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 


}
