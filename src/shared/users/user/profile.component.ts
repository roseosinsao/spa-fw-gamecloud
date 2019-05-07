import { Component } from '@angular/core';

import { UserApi } from '../user-api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'user-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {

    constructor(
        private userApi: UserApi,
        private authService: AuthService
    ){   
    }

    signOut() {
        this.userApi.signOut();
    }
      
    changePassword() {
        this.userApi.changePassword();
    }
}