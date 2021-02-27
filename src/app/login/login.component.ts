import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username;
  password;
  loginInvalid: boolean;



  showSpinner = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  // tslint:disable-next-line:typedef
  login(form) {
    this.showSpinner = true;
    setTimeout(() => {
      let response: any;
      response = this.authService.loginUser(form.username, form.password);
      response.subscribe(user => {
        if (user.length === 0) {
          this.loginInvalid = true;
        }
        else {
          this.router.navigate(['posts']);
        }
      });
      this.showSpinner = false;
    }, 3000);


  }


}
