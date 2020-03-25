import {Component} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User, Users} from '../../models/github-user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  showLoginError: false;
  username: string;

  user: User;
  userRepos: any;

  // TODO fix following class variables
  users: Users;
  repos: any[];
  languages: any[];

  constructor(private usersService: UsersService) {
  }

  getUsers() {
    this.usersService.getUsersData().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }

  getUserRepos() {
    this.usersService.getUserReposData().subscribe((data) => {
      console.log(data);
      this.userRepos = data;
    });
  }

  searchUsername() {
    // Update GitHub username with input from user
    this.usersService.updateDashboard(this.username);

    // Gets respective searched user data from service
    // Subscription to function necessary, because it returns an observable
    this.usersService.getUserData().subscribe(data => {
      console.log(data);
      this.user = data;
    });

    // Gets respective searched data about user's repos from service
    this.usersService.getUserReposData().subscribe(data => {
      console.log(data);
      this.repos = data;
    });

    /*
    this.usersService.getUserRepoLanguagesData().subscribe(data => {
      console.log(data);
      this.languages = data;
    });
    */
  }
}
