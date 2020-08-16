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

  // Variables
  submitted = false;
  showSubmitError = false;
  testLogin = new LoginCredentials('test@gmail.com', 'password');

  // Initializes the credentials
  constructor(private router: Router, private http: HttpClient) {
    this.testLogin.email = '';
    this.testLogin.password = '';
  }

  // Checks the inserted credentials for the login
  onSubmit() {
    if (this.testLogin.email === 'test@gmail.com' && this.testLogin.password === 'password') {
      console.log(this.testLogin.email);
      console.log(this.testLogin.password);
      this.submitted = true;
      this.showSubmitError = false; // gives visual feedback using ngIf in HTML
      this.router.navigate(['/home']); // routes the user to the search page

    } else {
      console.log('if');
      this.showSubmitError = true; // gives visual feedback using ngIf in HTML
    }
  }
}
