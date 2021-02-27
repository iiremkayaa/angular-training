import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { IUser } from 'src/app/user.model';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    user: IUser;
    constructor(private router: Router, private route: ActivatedRoute, private userService: UserService ){

    }
    // tslint:disable-next-line:typedef
    ngOnInit(){
      this.userService.getUser(+this.route.snapshot.params.id).subscribe(user => this.user = user);
    }
}
