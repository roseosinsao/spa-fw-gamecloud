import { Injectable } from '@angular/core';
import { IUser } from 'src/shared/models/user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            firstName: 'Rose',
            lastName: 'Osinsao',
            userName: userName,
            password: password
        }
    }

    saveProfile(userName: string, password: string) {
        this.currentUser.userName = userName;
        this.currentUser.password = password;
    }
}