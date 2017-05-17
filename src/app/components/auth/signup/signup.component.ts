import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertService: AlertService) {
}

  ngOnInit() {
  
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
    this.alertService.showToaster('Your registration is completed');
  }  
  
  onSignuppopup(form: NgForm) {
    this.authService.signUpWithPopup();
    this.alertService.showToaster('Your registration with Google is completed');
  }


}