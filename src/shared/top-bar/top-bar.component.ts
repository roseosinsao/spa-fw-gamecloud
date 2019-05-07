import { Component, OnInit } from '@angular/core';
import { UserApi } from '../users/user-api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'shared-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  now: Date = new Date();
  userName: string;

  constructor(
    private userApi: UserApi,
    private authService: AuthService
    ) {

    setInterval(() => {
      this.now = new Date();
    }, 1);
   }

  ngOnInit() {
    this.userName = this.authService.currentUser.userName;
  }

  userProfile() {
    this.userApi.userProfile();
  }
}
