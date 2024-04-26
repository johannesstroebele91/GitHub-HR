import {inject, Injectable} from '@angular/core';
import {ReplaySubject, tap, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthLoginUser, AuthResponseData, AuthUser} from '../models/auth';

const IDENTITY_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const URL_KEY = '?key=';
const MILLI_SECONDS = 1000;
const KEY = 'AIzaSyCC3jd68D74bA0NJI2Py6zewKXPUp8BpQI';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new ReplaySubject<AuthUser | null>();
  http = inject(HttpClient);
  router = inject(Router);
  private tokenExpirationTimer: any;

  signup(user: AuthLoginUser) {
    return this.http.post<AuthResponseData>(IDENTITY_URL + 'signUp' + URL_KEY + KEY, {
      email: user.email, password: user.password, returnSecureToken: true
    }).pipe(catchError(this.handleError), tap((resData) => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn);
    }));
  }


  login(user: AuthLoginUser) {
    return this.http.post<AuthResponseData>(IDENTITY_URL + 'signInWithPassword' + URL_KEY + KEY, {
      email: user.email, password: user.password, returnSecureToken: true
    }).pipe(catchError(this.handleError), tap((resData) => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn);
    }));
  }

  autoLoginAfterReload() {
    const userDataJson = localStorage.getItem('userData');
    if (!userDataJson) {
      return;
    }

    const userData: {
      email: string,
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(userDataJson);

    const {email, id, _token, _tokenExpirationDate} = userData;

    const loadedUser = new AuthUser(email, id, _token, new Date(_tokenExpirationDate));
    if (loadedUser.token) {
      this.user.next(loadedUser);
    }

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogoutAfterTokenExpires(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    void this.router.navigate(['/']);
    localStorage.removeItem('userData');
    // if we log out manually, the automatic timer should be cleared!
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogoutAfterTokenExpires(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => errorMessage); // For network errors ("errorRes.error.error.message" might not exist)
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email was not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Password is invalid';
        break;
      case 'USER_DISABLED':
        errorMessage = 'User is disabled';
        break;
    }
    return throwError(() => errorMessage);
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * MILLI_SECONDS);
    const user = new AuthUser(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogoutAfterTokenExpires(expiresIn * MILLI_SECONDS);
    localStorage.setItem('userData', JSON.stringify(user)); // JSON.stringify is needed because local store can only store strings for the key-value-pairs
  }
}
