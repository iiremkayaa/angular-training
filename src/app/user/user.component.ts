import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
    users: any[];
    constructor(private userService: UserService ){
        userService.getUsers().subscribe(users => this.users = users);
      }

}
