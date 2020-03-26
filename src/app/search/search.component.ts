import {Component} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';
import {Language} from '../../models/language';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  showLoginError: false;
  username: string;

  user: User;

  // TODO fix following class variables
  repos: any[];
  languages: Language[];

  constructor(private usersService: UsersService) {
  }

  searchUsername() {
    this.languages = [];
    // Update GitHub username with input from user
    this.usersService.updateUsername(this.username);

    // Gets respective searched user data from service
    // Subscription to function necessary, because it returns an observable
    this.usersService.getUserData().subscribe(data => {
      console.log('getUserData() ');
      console.log(data);
      this.user = data;
    });

    // Gets respective searched data about user's repos from service
    this.usersService.getUserReposData().subscribe(repositories => {
      console.log('getUserReposData() ');
      console.log(repositories);
      this.repos = repositories;
      this.usersService.getUserRepoLanguagesData(this.repos[0]).subscribe(languages => {
        console.log('getUserRepoLanguagesData(repo) ' );
        console.log(languages);
        this.languages.push(languages);
      });
      /*
      this.repos.forEach( repo => {
        this.usersService.getUserRepoLanguagesData(repo).subscribe(languages => {
          console.log('getUserRepoLanguagesData(repo) ' );
          console.log(languages);
          this.languages = languages;
        });
      }); */
    });
  }
}
