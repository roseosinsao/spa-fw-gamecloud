import { Observable } from 'rxjs';

export abstract class UserApi {
    signIn : (username: string, password: string, rememberMe: boolean) => Observable<any>;
    signOut : () => Observable<any>;
    userProfile : () => Observable<any>;
    changePassword : () => Observable<any>;
    loginUser : (username: string, password: string) => Observable<any>;
    saveProfile : (username: string, password: string) => Observable<any>;
}