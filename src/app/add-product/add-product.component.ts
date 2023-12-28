import { Component, OnInit } from '@angular/core';
import { Product } from 'src/classes/Product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService,private cookieService: CookieService) { } 

  cookieUsername = this.cookieService.get('username');
  
  successAlertVisible = false;
  product:Product=new Product(0,"","",0,"","",this.cookieUsername,0,"");

  ngOnInit(): void {
  }

  submit(){
    this.productService.addProduct(this.product).subscribe(
      (response)=>{
          this.showSuccessAlert();
          
          console.log("Product added");
      },
      (error)=>{
          error.log("Error");
      }
    )
  }

  showSuccessAlert() {
    this.successAlertVisible = true;

    // (3000 ms)
    setTimeout(() => {
      this.successAlertVisible = false;
    }, 3000);
  }

}
