import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/classes/Product';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent implements OnInit {

  @Input() product!:  Product;
  @Input() product_index!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  readMore() {
    this.router.navigate(['/printer', this.product_index]);
  }

}
