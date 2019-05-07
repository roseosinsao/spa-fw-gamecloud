import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/base.module';
import { CasinoComponent } from './casino/casino.component';
import { FeatureComponent } from './feature/feature.component';
import { JackpotComponent } from './jackpot/jackpot.component';
import { OtherComponent } from './other/other.component';
import { appRoutes } from './app.routing';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserApi } from 'src/shared/users/user-api';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CasinoComponent,
    FeatureComponent,
    JackpotComponent,
    OtherComponent,
    FavoritesComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
