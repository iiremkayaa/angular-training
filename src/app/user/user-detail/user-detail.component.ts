import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { IUser } from 'src/app/user.model';
@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    user:IUser;
    constructor(private router:Router,private route:ActivatedRoute,private userService:UserService ){
        userService.getUser(+this.route.snapshot.params['id']).subscribe(user=>this.user=user);
    }
    ngOnInit(){
    }
    saveChanges(form){
        console.log(form);
    }
}
