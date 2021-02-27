import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'cluster';
import { AuthService } from 'src/app/shared/auth.service';
import { UserService } from 'src/app/shared/user.service';
import { IGeo, IAddress, IUser } from 'src/app/user.model';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: IUser;
    constructor(private router: Router, private route: ActivatedRoute,
                private userService: UserService, private authService: AuthService) {
        if (!this.authService.loggedInUser) {
            this.router.navigate(['/login']);
        }
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        if (this.authService.loggedInUser) {
            this.userService.getUser(this.authService.loggedInUser.id).subscribe(user => this.user = user);
        }
    }
    // tslint:disable-next-line:typedef
    saveChanges(form) {
        // tslint:disable-next-line:prefer-const
        console.log(form.value);
        if (form.valid) {
            const company = {
                name: form.value.companyName,
                catchPhrase: form.value.companyCatchPhrase,
                bs: form.value.companyBs
            };
            const geos: IGeo = {
                lat: form.value.lat ?? '',
                lng: form.value.lat ?? ''
            };
            const addresses: IAddress = {
                street: form.value.street ?? '',
                suite: form.value.suite ?? '',
                city: form.value.city ?? '',
                zipcode: form.value.zipcode  ?? '',
                geo: geos,
            };
            const updatedUser: IUser = {
                id: this.authService.loggedInUser.id,
                name: form.value.name,
                username: form.value.username,
                email: form.value.email,
                address: addresses,
                phone: form.value.phone ?? '',
                website: form.value.website ?? '',
                company,
                password:form.value.password
            };
            this.userService.updateUser(updatedUser);
            alert('Changes saved successfully');
            this.router.navigate(['/posts']);
        }
    }
}
