import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    users:any[];
    constructor(private userService:UserService ){
        userService.getUsers().subscribe(users=>this.users=users);
      }
      ngOnInit(){
      }
}
