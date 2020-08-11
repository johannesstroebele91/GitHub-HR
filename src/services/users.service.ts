import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly githubApiEndpoint = '/userapi';


  private username = 'johannesstroebele91';
  private clientId = 'a3b037c468909cdc00c5';
  private clientSecret = '40b1f3890764ef7553d2c87ae3a284231d0ab6a8';

  constructor(private http: HttpClient) {
  }

  updateUsername(username: string) {
    this.username = username;
  }

  // Gets data from GitHub API of the respective user
  getUserData(): Observable<any> {
    return this.http.get('/userapi'
      + '/'
      + this.username
      + '?client_id={'
      + this.clientId
      + '}?client_secret='
      + this.clientSecret);
  }

  // GET /users/:username/repos
  getUserReposData(): Observable<any> {
    return this.http.get('/userapi'
      + '/'
      + this.username
      + '/repos'
      + '?client_id='
      + this.clientId
      + '?client_secret='
      + this.clientSecret);
  }

  // GET /repos/:owner/:repo/languages
  // https://api.github.com/repos/johannesstroebele91/Angular_Knowledge/languages
  getUserRepoLanguagesData(repo: any): Observable<any> {
    return this.http.get('/languagesapi'
      + '/'
      + repo.owner.login
      + '/'
      + repo.name
      + '/languages');
  }
}
