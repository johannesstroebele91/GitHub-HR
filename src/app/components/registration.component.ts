import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatError, MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatError,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    AsyncPipe,
    MatProgressSpinner,
    NgForOf,
  ],
  template: `
    @if (isLoading) {
      <mat-card
        style="padding: 30px 12px; text-align: center; max-width: 500px; margin: 3% auto 0 auto;"
      >
        <mat-card-header style="display: block;">
          <mat-card-title style=" font-size: 36px">
            <button
              mat-icon-button
              color="primary"
              routerLink=""
              aria-label="Go back to login page"
            >
              <mat-icon>arrow_back</mat-icon>
            </button>
            <span>Registration</span>
          </mat-card-title>
          <mat-card-subtitle style="margin: 30px auto; font-size: 24px;"
          >Sign up here to continue
          </mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <p>No email verification is necessary for this registration.</p>
          <form (ngSubmit)="onSubmit()" autocomplete="off">
            <div [formGroup]="signupForm">
              <mat-form-field style="display: block">
                <mat-label>Enter your nickname</mat-label>
                <input
                  matInput
                  formControlName="name"
                  placeholder="John Doe"
                  name="name"
                />
                <mat-error *ngIf="name.invalid">{{
                    ERROR_MESSAGE
                  }}
                </mat-error>
              </mat-form-field>

              <mat-form-field style="display: block">
                <mat-label>Enter your email</mat-label>
                <input
                  matInput
                  formControlName="email"
                  placeholder="pat@example.com"
                  name="email"
                  autocomplete="off"
                />
                <mat-error *ngIf="email.invalid">{{
                    ERROR_MESSAGE
                  }}
                </mat-error>
              </mat-form-field>

              <mat-form-field style="display: block">
                <mat-label>Enter your password</mat-label>
                <input
                  matInput
                  formControlName="password"
                  [type]="hidePasswordInput ? 'password' : 'text'"
                  name="password"
                  autocomplete="new-password"
                  minlength="6"
                />
                <button
                  type="button"
                  mat-icon-button
                  matSuffix
                  (click)="hidePasswordInput = !hidePasswordInput"
                  [attr.aria-label]="'Hide password'"
                  [attr.aria-pressed]="hidePasswordInput"
                >
                  <mat-icon>{{
                      hidePasswordInput ? 'visibility_off' : 'visibility'
                    }}
                  </mat-icon>
                </button>
                <mat-error *ngIf="signupErrorMessage" style="margin-bottom: 10px">{{
                    signupErrorMessage
                  }}
                </mat-error>
                <mat-error *ngIf="requestErrorMessage !== ''" style="margin-bottom: 10px">
                  {{ requestErrorMessage }}
                </mat-error>
              </mat-form-field>
            </div>

            <button
              type="submit"
              mat-raised-button
              color="primary"
              style="margin: 10px auto 20px auto;"
            >
              Register
            </button>
            <mat-error *ngIf="signupErrorMessage" style="margin-bottom: 10px">{{
                signupErrorMessage
              }}
            </mat-error>
          </form>
        </mat-card-content>
        <mat-card-footer>
        <span style="margin-top: 20px"
        >If you are already registered, you can log in
          <a routerLink="">here!</a></span
        >
        </mat-card-footer>
      </mat-card>
    } @else {
      <mat-spinner style="margin: 0 auto"></mat-spinner>
    }
  `,
})
export class RegistrationComponent {
  router = inject(Router);
  authService = inject(AuthService);

  hidePasswordInput = true;
  isLoading = true;
  signupErrorMessage: string | null = null;
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  requestErrorMessage: string = '';
  protected readonly ERROR_MESSAGE = 'You must enter a valid value';

  get name(): any {
    return this.signupForm.get('name');
  }

  get email(): any {
    return this.signupForm.get('email');
  }

  onSubmit() {
    const name = this.signupForm.value.name;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    if (
      this.signupForm.status === 'VALID' &&
      name &&
      email &&
      password
    ) {
      this.authService
        .signup({
          email: email!,
          password: password!,
        })
        .subscribe({
          next: (response) => {
            console.log('User was created successfully', response);
            this.router.navigate(['/home']);
          },
          error: (error) => {
            this.requestErrorMessage = error;
            console.error('Error on sign in:', error);
          },
        });
    }
  }
}
