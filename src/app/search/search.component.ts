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

  username: string;
  user: User;

  // TODO fix following class variables
  repos: any[];
  languagesPerRepo: Language[];
  languagesOfRepos: string[];

  public chartType: 'radar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chartLabels: Array<any> = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 250, 220, .2)',
      borderColor: 'rgba(0, 213, 132, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  /* TODO: rework or delete later
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  */

  constructor(private usersService: UsersService) {
  }

  searchUsername(username?: string) {
    if (username) {
      this.username = username;
    }
    console.log(this.username);
    console.log(username);
    this.languagesPerRepo = [];
    this.languagesOfRepos = [];
    // Update GitHub username with input from user
    this.usersService.updateUsername(this.username);

    // Gets respective searched user data from service
    // Subscription to function necessary, because it returns an observable
    this.usersService.getUserData().subscribe(data => {
      // console.log('getUserData() ');
      // console.log(data);
      this.user = data;
    });

    // Gets respective searched data about user's repos from service
    this.usersService.getUserReposData().subscribe(data => {
      // console.log('getUserReposData() ');
      // console.log(repositories);
      this.repos = data.json().repos;
      this.usersService.getUserRepoLanguagesData(this.repos[0]).subscribe(languages => {
        // console.log('getUserRepoLanguagesData(repo) ' );
        // console.log(languages);
        this.languagesPerRepo.push(languages);
        // filterLanguages(languages);
      });
    });
    /*
        filterLanguages(languagesPerRepo: any) {
        for (let i in languagesPerRepo) {
          if(!languagesPerRepo.includes(i)) {
            this.languagesPerRepo.push(this.languagesOfRepos);
          }
        }
          for (const key in languages) {
          const value = languages[key];
        }
      }
      */
  }
}
