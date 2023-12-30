import { Component, OnInit } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  // constructor(private cookieService: CookieService) { }

  // // Use a getter method to dynamically get the userCookiePresent value
  // get userCookiePresent(): boolean {
  //   return this.cookieService.check("user");
  // }

  // logout(){
  //   this.cookieService.delete("user");
  //   this.cookieService.delete("username")
  // }
  ngOnInit(): void {
  }

}
