import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/classes/Product';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  @Input() product!:  Product;
  @Input() product_index!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  readMore() {
    this.router.navigate(['/monitor', this.product_index]);
  }

}