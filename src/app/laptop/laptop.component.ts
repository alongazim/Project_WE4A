import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/classes/Product';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  @Input() product!:  Product;
  @Input() product_index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
