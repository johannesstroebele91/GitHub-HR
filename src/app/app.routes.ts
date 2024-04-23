import {Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: SearchComponent},
  {path: '**', component: SearchComponent},  // Wildcard route for a 404 page
];
