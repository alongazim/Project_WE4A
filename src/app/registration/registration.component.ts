import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../vendor-service.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/model/vendor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  implements OnInit{
  vendor:Vendor=new Vendor("","","","","","","");
  message:boolean=false;
  
  showCompanyName: boolean = false;
  
  constructor(private vendorService: VendorServiceService,private router:Router) {}

  submit() {
    this.vendorService.addVendor(this.vendor).subscribe(
      (response) => {
        this.message=true;
        console.log('Seller data successfully saved:', response);
        this.router.navigate(['login-form']);
      },
      (error) => {
        console.error('Error while saving vendor data:', error);
      }
    );
  }
  

 

  ngOnInit(): void {
    
  } 

}
