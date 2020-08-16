import {Component, OnInit} from '@angular/core';
import {LoginCredentials} from '../../models/login-credentials';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  submitted = false;
  showSubmitError = false;
  testLogin = new LoginCredentials('test@gmail.com', 'password');

  constructor(private router: Router, private http: HttpClient) {
    this.testLogin.email = '';
    this.testLogin.password = '';
  }

  onSubmit() {
    if (this.testLogin.email === 'test@gmail.com' && this.testLogin.password === 'password') {
      console.log(this.testLogin.email);
      console.log(this.testLogin.password);
      this.submitted = true;
      this.showSubmitError = false;
      this.router.navigate(['/home']);  // define your component where you want to go

    } else {
      console.log('if');
      this.showSubmitError = true;
    }
  }

  registerUser() {

  }
}
