import { Component, OnInit } from '@angular/core';
import { Product } from 'src/classes/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-printer',
  templateUrl: './list-printer.component.html',
  styleUrls: ['./list-printer.component.css']
})
export class ListPrinterComponent implements OnInit {

  ProductArray! : Product[];

  constructor(
    public prdService: ProductService
  ) { 
    this.ProductArray = this.prdService.getPrinters();
  }

  ngOnInit(): void {
    
  }

}
