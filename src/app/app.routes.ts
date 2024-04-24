import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from '../services/auth-guard.service';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration.component';

export const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegistrationComponent},
  {path: '**', redirectTo: '/home'},
];
