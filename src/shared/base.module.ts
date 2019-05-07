import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedBodyComponent } from './sharedbody/sharedbody.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContentComponent } from './content/content.component';
import { MenuService } from 'src/services/menu.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { MenuPopupComponent } from './menus/menu-popup/menu-popup.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserApi } from './users/user-api';
import { ProfileComponent } from './users/user/profile.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { LanguageService } from 'src/services/language.service';
import { ChangePasswordComponent } from './users/user/changepassword/change-password.component';

@NgModule({
  declarations: [
    SharedBodyComponent,
    TitleBarComponent,
    TopBarComponent,
    ContentComponent,
    MenuComponent,
    MenuItemComponent,
    MenuPopupComponent,
    SignInComponent,
    RegisterUserComponent,
    ProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ShowHidePasswordModule
  ],
  providers: [
    MenuService,
    LanguageService
  ],
  exports: [
      SharedBodyComponent
  ]
})
export class SharedModule { }
