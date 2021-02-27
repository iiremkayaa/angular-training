import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IUser } from '../user.model';
import { PostService } from './post.service';
import { UserService } from './user.service';
@Injectable()
export class UserResolver implements Resolve<any>
{
    id: number;
    returnedUser: IUser;
    constructor(private userService: UserService){
    }
    // tslint:disable-next-line:typedef
    resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot){
        /*this.userService.getUserByPostId(+route.params.id).subscribe(res => {
            this.id = res[0].id;
            this.userService.getUser(res[0].id).subscribe(response => {this.returnedUser = response; return this.returnedUser; });
         } );*/
        return true; // this.returnedUser;
    }
}
