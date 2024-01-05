import { Component, OnInit } from '@angular/core';
import { Product } from 'src/classes/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-speaker',
  templateUrl: './list-speaker.component.html',
  styleUrls: ['./list-speaker.component.css']
})
export class ListSpeakerComponent implements OnInit {

  ProductArray! : Product[];

  constructor(
    public prdService: ProductService
  ) { 
    this.ProductArray = this.prdService.getSpeaker();
  }

  ngOnInit(): void {
    
  }

}
