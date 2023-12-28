import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={};

  constructor(private authService: AuthService,private router:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(): void {
    this.authService.login(this.user.email, this.user.password).subscribe(
      (response) => {
        // Handle the server response, for example, save the token
        if (Array.isArray(response) && response.length > 0) {
          // The response is an array with length greater than 0
          const email=response[0].email;
          console.log(response[0]);
          document.cookie="username="+response[0].usernameVendor; //cookie for adding product
          document.cookie="user="+email+"; max-age=3600" //authentication cookie
          this.router.navigate(['home-vendor']);
        }else{
          
        }
      },
      (error) => {
        // Handle errors, for example, display a message to the user
        console.error('bro', error);
      }
    );
  }
  

}
