import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.autoLoginAfterReload();

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }
}
