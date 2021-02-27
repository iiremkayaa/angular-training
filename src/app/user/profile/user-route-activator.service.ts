import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
@Injectable()
export class UserRouteActivator implements CanActivate{
    constructor(private userService: UserService, private route: Router){

    }
    // tslint:disable-next-line:typedef
    canActivate(route: ActivatedRouteSnapshot){
        const userExist = !!this.userService.getUser(+route.params.id);
        if (!userExist){
            this.route.navigate(['/']);
        }
        return userExist;
    }
}
