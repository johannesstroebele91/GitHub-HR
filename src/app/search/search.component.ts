import {Component} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';
import {Language} from '../../models/language';
import {dataPieChartReposPerLanguage} from './pie-chart-data'; // TODO delete later due to testing data
import {ChartType, ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {Repo} from '../../models/repo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  // Search Data
  username: string;
  user: User;
  repos: Repo;
  reposAmount = 0;
  languageInRepos: string[] = [];
  languageInReposWithoutDuplicates: string[] = [];
  numberOfLanguageInReposWithoutDuplicates: number[] = [];
  languagesPerRepo: Language[] = []; // TODO fix variable
  languagesOfRepos: string[] = []; // TODO fix variable

  // Charts
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
  };

  pieChartLabels: Label[] = this.languageInReposWithoutDuplicates;
  pieChartData: number[] = this.numberOfLanguageInReposWithoutDuplicates;
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

    // Search for string from last searched usernames
    if (username) {
      this.username = username;
    }

    // Update GitHub username with input from user
    this.usersService.updateUsername(this.username);

    // Gets respective searched user data from service
    // Subscription to function necessary, because it returns an observable
    this.usersService.getUserData().subscribe(data => {
      this.user = data;
    });

    // Gets respective searched data about user's repos from service
    this.usersService.getUserReposData().subscribe(data => {

      this.repos = data;

      // For displaying number of repos
      this.reposAmount = Object.keys(this.repos).length;

      // Array for all languages in repos of one user
      let amountOfLanguageInReposWithoutNull = 0;
      for (let i = 0; i < this.reposAmount; i++) {
        if (this.repos[i].language !== null) {
          this.languageInRepos.push(this.repos[i].language);
          amountOfLanguageInReposWithoutNull++;
        }
      }

      // The same array without duplicates
      let languageInReposWithoutDuplicatesSet: Set<string>;
      languageInReposWithoutDuplicatesSet = new Set(this.languageInRepos);
      languageInReposWithoutDuplicatesSet.forEach(v => this.languageInReposWithoutDuplicates.push(v));

      // How often the coding language occurs in the array
      let numberOfLanguageInReposWithoutDuplicatesObj: any;
      numberOfLanguageInReposWithoutDuplicatesObj = this.countRandomStringElementDuplicatesInArray();
      this.numberOfLanguageInReposWithoutDuplicates = Object.values(numberOfLanguageInReposWithoutDuplicatesObj);
      console.log('numberOfLanguageInReposWithoutDuplicates)');
      console.log(this.numberOfLanguageInReposWithoutDuplicates);

      // TODO needs fixing
      /* this.usersService.getUserRepoLanguagesData(this.repos[0]).subscribe(languages => {
        this.languagesPerRepo.push(languages);
        filterLanguages(languages);
      }); */
    });
    // TODO needs fixing
    /*  filterLanguages(languagesPerRepo: any) {
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
  // count number of random string element duplicates in array
  countRandomStringElementDuplicatesInArray() {

    const counts: number[] = [];
    this.languageInRepos.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
  }


  // Stars per Repository: pieChartStarsPerRepo
  // TODO add later when stars per repo are imported correctly

  // Commits per Language: pieChartCommitsPerLanguage
  // TODO add later when stars per repo are imported correctly

}
