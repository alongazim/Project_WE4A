import { Component, OnInit } from '@angular/core';
import { Product } from 'src/classes/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-monitor',
  templateUrl: './list-monitor.component.html',
  styleUrls: ['./list-monitor.component.css']
})
export class ListMonitorComponent implements OnInit {

  ProductArray! : Product[];

  constructor(
    public prdService: ProductService
  ) { 
    this.ProductArray = this.prdService.getMonitors();
  }

  ngOnInit(): void {
    
  }

}
