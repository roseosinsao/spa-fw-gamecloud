import { OnInit, Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/shared/models/user.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApi } from '../../user-api';
import { stringify } from '@angular/core/src/util';


@Component({
    selector: 'change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
    @Output() updateUser = new EventEmitter();
    currentUser: IUser;
    profileForm: FormGroup;
    userName: FormControl;
    password: FormControl;
    newpassword: FormControl;
    warningMsg: string;
    warningMsg2: string;

    constructor(
        private authService: AuthService,
        private router: Router,
        private userApi: UserApi
    ){}
    ngOnInit(): void {
        this.currentUser = this.authService.currentUser;
    }

    saveProfile(updateProfileForm: NgForm) {
        var validPasswords = this.validatePasswords(updateProfileForm.value.password, updateProfileForm.value.newpassword);

        if(validPasswords && updateProfileForm.valid) {
            this.userApi.saveProfile(updateProfileForm.value.username, updateProfileForm.value.newpassword)
            .subscribe(
                c => this.router.navigate(['/authenticated/favorites']),
            );
            console.log('Profile Saved');
        }
    }

    validatePasswords(oldPassword: string, newPassword: string): boolean {
        var validOldPassword = this.validateOldPassword(oldPassword);
        var validNewPassword = this.validateNewPassword(newPassword);

        if (validOldPassword && validNewPassword) return true;
        return false;
    }

    validateOldPassword(password: string): boolean {
        if (password === null || password === undefined || password === "") {
            this.warningMsg = 'Old password is required.'
            return false;
        } else if (password != this.currentUser.password) {
            this.warningMsg = 'Old password is incorrect.'
            return false;
        }
        return true;
    }

    validateNewPassword(password: string): boolean {
        if (password === null || password === undefined || password === "") {
            this.warningMsg2 = 'New password is required.'
            return false;
        }
        return true;
    }
} 	