import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navigation',
  templateUrl: './navbar.component.html',
  styles: ['active {color:violet}']
})
export class NavigationComponent implements OnInit {
  constructor(private authService: AuthService, private route: Router){
  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
  }
  isLoggedIn(): boolean{
    return this.authService.isAuthenticated();
  }
  logout(): void{
    this.authService.logout();
    this.route.navigate(['/']);
  }
}
