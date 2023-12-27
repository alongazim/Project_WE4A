import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from 'src/model/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  vendor!:Vendor
  constructor(private http:HttpClient){
  }
  
  addVendor(vendor:Vendor):Observable<Vendor>{
    return this.http.post<Vendor>('http://localhost:3000/vendors',vendor)
  }
  

}
