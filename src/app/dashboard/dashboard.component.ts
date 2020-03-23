import {Component, Input} from '@angular/core';
import {User} from '../../models/github-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @Input() users: User;

  constructor() {
    console.log(this.users);
  }
}
