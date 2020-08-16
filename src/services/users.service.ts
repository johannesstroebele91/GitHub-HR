import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private username = 'USERNAME';
  private clientId = 'CLIENT_ID';
  private clientSecret = 'CLIENT_SECRET';

  constructor(private http: HttpClient) {
  }

  updateUsername(username: string) {
    this.username = username;
  }

  // Gets data from GitHub API of the respective user
  getUserData(): Observable<any> {
    return this.http.get('/githubapi/users'
      + '/'
      + this.username
      + '?client_id={'
      + this.clientId
      + '}?client_secret='
      + this.clientSecret);
  }

  // GET /users/:username/repos
  getUserReposData(): Observable<any> {
    return this.http.get('/githubapi/users'
      + '/'
      + this.username
      + '/repos?per_page=100'
      + '&client_id='
      + this.clientId
      + '&client_secret='
      + this.clientSecret);
  }

  // GET /repos/:owner/:repo/languages
  // E. g. https://api.github.com/repos/johannesstroebele91/Angular_KnowledgeBase/languages
  getUserRepoLanguagesData(repo: any): Observable<any> {
    return this.http.get('/githubapi/repos'
      + '/'
      + repo.owner.login
      + '/'
      + repo.name
      + '/languages');
  }
}
