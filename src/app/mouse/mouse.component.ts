import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/classes/Product';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {

  @Input() product!:  Product;
  @Input() product_index!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  readMore() {
    this.router.navigate(['/mouse', this.product_index]);
  }

}