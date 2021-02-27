import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../shared/auth.service';
import { UserService } from '../shared/user.service';
import { IAddress, IGeo, IUser } from '../user.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
    username;
    password;
    confirmPassword;
    name;
    email;
    phone;
    isRegistered = false;
    constructor(private userService: UserService , private route: Router, private authService: AuthService){

    }
    register(form): void{
        if (form.valid){
            const values = form.value;
            const company = {
                name: '',
                catchPhrase: '',
                bs: ''
            };
            const geos: IGeo = {
                lat: '',
                lng:  ''
            };
            const addresses: IAddress = {
                street:  '',
                suite:  '',
                city:  '',
                zipcode:  '',
                geo: geos,
            };
            // tslint:disable-next-line:prefer-const
            let newUser: IUser = {
                id: 0,
                name: '',
                username: '',
                email: '',
                address: addresses,
                phone: '',
                website: '',
                password: '',
                company,

            };
            newUser.name = values.name;
            newUser.email = values.email;
            newUser.username = values.username;
            newUser.phone = values.phone;
            newUser.password = values.password;
            this.userService.postUser(newUser);
            this.isRegistered = true;
            this.authService.loginUser(form.value.username, form.value.password);
            this.route.navigate(['/posts']);
        }
    }
    checkPassword(value): boolean{
        if (value != null) {
            return value.length < 5 ;
        }
        return true;
    }

}
