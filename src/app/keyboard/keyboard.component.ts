import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/classes/Product';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  @Input() product!:  Product;
  @Input() product_index!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  readMore() {
    this.router.navigate(['/keyboard', this.product_index]);
  }

}
