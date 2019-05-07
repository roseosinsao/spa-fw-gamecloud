import { Routes } from '@angular/router';
import { CasinoComponent } from './casino/casino.component';
import { FeatureComponent } from './feature/feature.component';
import { JackpotComponent } from './jackpot/jackpot.component';
import { OtherComponent } from './other/other.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { SignInComponent } from 'src/shared/users/sign-in/sign-in.component';
import { RegisterUserComponent } from 'src/shared/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';
import { ProfileComponent } from 'src/shared/users/user/profile.component';
import { ChangePasswordComponent } from 'src/shared/users/user/changepassword/change-password.component';

export const appRoutes: Routes = [  
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
  children: [
    { path: '', canActivateChild: [AuthGuard],
      children: [
        { path: '', redirectTo: 'favorites', pathMatch: 'full' },
        { path: 'favorites', component: FavoritesComponent },
        { path: 'casino', component: CasinoComponent },
        { path: 'feature', component: FeatureComponent },
        { path: 'jackpot', component: JackpotComponent },
        { path: 'other', component: OtherComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'changepassword', component: ChangePasswordComponent }
      ]}
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];