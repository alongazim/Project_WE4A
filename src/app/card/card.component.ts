import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/classes/Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  product: Product | undefined;

  constructor(public productService: ProductService, public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getKeyboards();
    this.product = this.productService.getKeyboardById(+this.router.snapshot.params['id']);
  }

}
