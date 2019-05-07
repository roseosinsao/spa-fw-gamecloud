import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApi } from '../user-api';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageService } from 'src/services/language.service';
import { Language } from 'src/shared/models/languages.model';

@Component({
  selector: 'shared-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formError: string;
  submitting = false;
  languages: Array<Language>;
  
  constructor(private userApi: UserApi,
              private router:Router,
              private authService: AuthService,
              private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languages = this.languageService.languages;
  }
            
  onSubmit(signInForm: NgForm) {
    
    this.authService.loginUser(signInForm.value.username, signInForm.value.password);

    if (signInForm.valid) {

      console.log('submitting...', signInForm);
      this.submitting = true;
      this.formError = null;

      this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
        .subscribe((data) => {
            console.log('got valid: ', data);
            this.router.navigate(['/authenticated']);
          },
          (err)=> {
            this.submitting = false;
            console.log('got error: ', err);
            this.formError = err;
          }
        );
    }
  }

  onLanguageChanged(value) {
    // Will leave this blank for now
    // This should pick/change the entire language of the system
  }
}
