import {Component} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';
import {Language} from '../../models/language';
import {dataPieChartReposPerLanguage} from './pie-chart-data';
import {ChartType, ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  // Search Data
  username: string;
  user: User;

  // TODO fix following class variables
  repos: any[];
  languagesPerRepo: Language[];
  languagesOfRepos: string[];

  // Charts
  dataPieChartReposPerLanguage: any; // TODO just for testing, delete later
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
  };

  pieChartLabels: Label[] = ['HTML', 'CSS', 'Java', 'Go'];
  pieChartData: number[] = [738, 435, 311, 201];
  pieChartType: ChartType = 'doughnut';
  pieChartLegend = true;
  pieChartColors = [{backgroundColor: ['#1abc9c', '#9b59b6', '#3498db', '#C4E538']},
  ];

  // Constructor
  constructor(private usersService: UsersService) {
    Object.assign(this, {dataPieChartReposPerLanguage});
  }

  // Methods
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
      this.repos = data;
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

  // Links
  linkToWebsite(userLink: string) {
    window.open(userLink, '_blank');
  }

  linkToEmail(emailLink: string) {
    window.open('mailto: ' + emailLink, '_blank');
  }

  // Charts
  // Repositories per Language: pieChartReposPerLanguage
  // TODO add later when code languages per repo are imported correctly

  // Stars per Repository: pieChartStarsPerRepo
  // TODO add later when stars per repo are imported correctly

  // Commits per Language: pieChartCommitsPerLanguage
  // TODO add later when stars per repo are imported correctly

}
