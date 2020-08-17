import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiEndpoint = '/githubapi';
  private username;

  // API keys
  apiKeys: any;
  clientId: any; // needs to be set manually for running the application locally
  clientSecret: any; // needs to be set manually for running the application locally
  constructor(private http: HttpClient) {

    // Load API keys from env endpoint for hiding client and secret id
    // Can be uncommented if clientId and clientSecret is set manually
    this.http.get('/env')
      .subscribe(result => {
        this.apiKeys = result;
        this.clientId = this.apiKeys.CLIENT_ID;
        this.clientSecret = this.apiKeys.CLIENT_SECRET;
      });
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
      + this.clientId
      + '}?client_secret='
      + this.clientSecret);
  }

  // GET /users/:username/repos
  getUserReposData(): Observable<any> {
    return this.http.get(this.apiEndpoint
      + '/users/'
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
