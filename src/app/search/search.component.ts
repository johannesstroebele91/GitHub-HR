import {Component} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/github-user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  // TODO fix user model -> not working
  users: User;
  userRepos: any;

  constructor(private usersService: UsersService) {
    // Subscription to function necessary, because it returns an observable
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
}
