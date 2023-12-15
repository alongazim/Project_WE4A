import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/classes/Product';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  @Input() product!:  Product;
  @Input() product_index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
