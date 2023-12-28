import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/classes/Product';
import { Vendor } from 'src/model/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  productList!:Product[];
  vendor!:Vendor
  constructor(private http:HttpClient){
  }
  
  addVendor(vendor:Vendor):Observable<Vendor>{
    return this.http.post<Vendor>('http://localhost:3000/vendors',vendor)
  }

  getAllVendorProducts(username: string): Observable<Product[]> {
  return this.http.get<Product[]>('http://localhost:3000/products?vendor=' + username);
}

}
