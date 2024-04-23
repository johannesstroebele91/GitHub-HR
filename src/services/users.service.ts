import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiEndpoint = 'https://api.github.com';
  username = 'johannesstroebele91';

  constructor(private http: HttpClient) {
  }

  updateUsername(username: string) {
    this.username = username;
  }

  // Gets data from GitHub API of the respective user
  getUserData(): Observable<any> {
    return this.http.get(this.apiEndpoint
      + '/users/'
      + this.username
      + '?client_id={'
      + environment.clientId
      + '}?client_secret='
      + environment.clientSecret);
  }

  // GET /users/:username/repos
  getUserReposData(): Observable<any> {
    return this.http.get(this.apiEndpoint
      + '/users/'
      + this.username
      + '/repos?per_page=100'
      + '&client_id='
      + environment.clientId
      + '&client_secret='
      + environment.clientSecret);
  }

  // GET /repos/:owner/:repo/languages
  // E. g. https://api.github.com/repos/johannesstroebele91/Angular_KnowledgeBase/languages
  getUserRepoLanguagesData(repo: any): Observable<any> {
    return this.http.get(this.apiEndpoint
      + '/repos/'
      + repo.owner.login
      + '/'
      + repo.name
      + '/languages'
    )
      ;
  }
}
