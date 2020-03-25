import {Component, Input} from '@angular/core';
import {User, Users} from '../../models/github-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @Input() users: Users;
  @Input() user: User;
  @Input() repos: any;

  constructor() {
    console.log(this.users);
  }
}
