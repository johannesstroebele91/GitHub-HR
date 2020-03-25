import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../models/github-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private username = 'johannesstroebele91';
  private clientId = 'a3b037c468909cdc00c5';
  private clientSecret = '40b1f3890764ef7553d2c87ae3a284231d0ab6a8';

  constructor(private http: HttpClient) {
  }

  // Gets data from GitHub API of the respective user
  getUserData(): Observable<any> {
    return this.http.get('https://api.github.com/users/'
      + this.username
      + '?client_id='
      + this.clientId
      + '?client_secret='
      + this.clientSecret);
  }

  getUserReposData(): Observable<any> {
    return this.http.get('https://api.github.com/users/'
      + this.username
      + '/repos?client_id='
      + this.clientId
      + '?client_secret='
      + this.clientSecret);
  }
  // https://api.github.com/repos/johannesstroebele91/Angular_Knowledge/languages
  getUserRepoLanguagesData(): Observable<any> {
    return this.http.get('https://api.github.com/repos/'
      + this.username
      + '?client_id='
      + this.clientId
      + '?client_secret='
      + this.clientSecret
      + '/languages');
  }

  // TODO fix or replace later
  // Gets data from GitHub API of the respective user
  getUsersData(): Observable<any> {
    return this.http.get<Users>('https://api.github.com/users?page=1&per_page=100');
    /* TODO update or delete later
    + this.user.username
    + '?client_id='
    + this.clientId
    + '?client_secret='
    + this.clientSecret);
    */
  }

  updateDashboard(username: string) {
    this.username = username;
  }
}
