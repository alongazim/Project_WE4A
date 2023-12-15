import { Component, OnInit } from '@angular/core';
import { Product } from 'src/classes/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-keyboard',
  templateUrl: './list-keyboard.component.html',
  styleUrls: ['./list-keyboard.component.css']
})
export class ListKeyboardComponent implements OnInit {

  ProductArray! : Product[];

  constructor(
    public prdService: ProductService
  ) { }

  ngOnInit(): void {
    this.ProductArray = this.prdService.getKeyboards();
  }


}
