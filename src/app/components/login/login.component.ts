import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {Component, inject, OnDestroy} from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule,} from '@angular/material/card';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../services/auth.service';
import {AuthResponseData} from '../../../models/auth';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatInput,
    MatIconButton,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelect,
    MatOption,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardModule,
    RouterLink,
    MatToolbar,
    MatToolbarRow,
    NgOptimizedImage,
  ],
})
export class LoginComponent implements OnDestroy {
  hidePasswordInput = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  router = inject(Router);
  authService = inject(AuthService);
  requestErrorMessage: string = '';
  ERROR_MESSAGE = 'You must enter a valid value';
  private authServiceSub: Subscription | undefined;

  get email(): any {
    return this.loginForm.get('email');
  }

  get password(): any {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (
      this.loginForm.status === 'VALID' &&
      this.loginForm.value.email &&
      this.loginForm.value.password
    ) {
      this.authService
        .login({
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        })
        .subscribe({
          next: (response: AuthResponseData) => {
            if (response.registered) {
              this.router.navigate([`/home/${response.localId}`]);
            }
          },
          error: (error) => {
            console.log('Error on log in', error);
            this.requestErrorMessage = 'The combination of the email and password that you have entered, does not exists';
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.authServiceSub?.unsubscribe();
  }
}
