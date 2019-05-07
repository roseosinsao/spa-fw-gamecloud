import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { UserApi } from 'src/shared/users/user-api';
import { AuthService } from './auth.service';

@Injectable()
export class UserService implements UserApi {

  isAuthenticated = true;

  constructor(private router: Router,
    private authService: AuthService
    ) { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return of({});
    // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalid User Name and/or Password'));
  }

  signOut(): Observable<any> {
      this.isAuthenticated = false;
      this.router.navigate(['/signin']);
      return of({});
  }

  loginUser(userName: string, password: string): Observable<any> {
    return of({
        id: 1,
        firstName: 'Rose',
        lastName: 'Osinsao'
        });

    }

    userProfile(): Observable<any> {
      this.router.navigate(['/authenticated/profile']);
      return of({});
    }

    changePassword(): Observable<any> {
        this.router.navigate(['/authenticated/changepassword']);
        return of({});
    }

    saveProfile(userName: string, password: string): Observable<any> {
        this.authService.saveProfile(userName, password);
        return of({});
    }
}