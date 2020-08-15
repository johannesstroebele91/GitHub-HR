import {Component} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';
import {dataPieChartReposPerLanguage} from './pie-chart-data'; // TODO delete later due to testing data
import {ChartType, ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {Repo, Language} from '../../models/repo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  // General
  username: string;
  user: User;
  repos: Repo[];
  reposAmount = 0;

  // Most stared repositories
  starsNameOfRepos: string[] = [];
  starsOfRepos: number[] = [];

  // Largest repositories
  sizeNameOfRepos: string[] = [];
  sizeOfRepos: number[] = [];

  // Most forked repositories
  forkNameOfRepos: string[] = [];
  forkOfRepos: number[] = [];

  // Most used languages per repository
  languageInRepos: string[] = [];
  languageInReposWithoutDuplicates: string[] = [];
  numberOfLanguageInReposWithoutDuplicates: number[] = [];

  languagesPerRepo: Language[] = []; // TODO fix variable
  languagesOfRepos: string[] = []; // TODO fix variable

  // CHARTS
  // General
  pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
    },
  };
  pieChartType: ChartType = 'doughnut';
  pieChartLegend = true;
  pieChartColors = [{
    backgroundColor: ['#1abc9c', '#9b59b6', '#3498db', '#C4E538', '#eb4d4b',
      '#686de0', '#7ed6df', '#f9ca24', '#a29bfe', '#00b894',
      '#1abc9c', '#9b59b6', '#3498db', '#C4E538', '#eb4d4b',
      '#686de0', '#7ed6df', '#f9ca24', '#a29bfe', '#00b894']
  },
  ];

  // Data
  // Most stared repository
  pieChartLabelsStarsNamesOfRepos: Label[] = this.starsNameOfRepos;
  pieChartDataStarsOfRepos: number[] = this.starsOfRepos;

  // Largest repository
  pieChartLabelsSizeNamesOfRepos: Label[] = this.sizeNameOfRepos;
  pieChartDataSizeOfRepos: number[] = this.sizeOfRepos;

  // Largest repository
  pieChartLabelsForksNamesOfRepos: Label[] = this.forkNameOfRepos;
  pieChartDataForksOfRepos: number[] = this.forkOfRepos;

  // Most used language per repository
  pieChartLabelsLanguagesOfRepos: Label[] = this.languageInReposWithoutDuplicates;
  pieChartDataNumberOfLanguages: number[] = this.numberOfLanguageInReposWithoutDuplicates;

  // CONSTRUCTOR
  constructor(private usersService: UsersService) {
    Object.assign(this, {dataPieChartReposPerLanguage});
  }

  // API REQUEST METHODS
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

      for (let i = 0; i < this.reposAmount; i++) {

        // Most stared repository
        // TODO: stargazers_count needs to be set relative to the min and max stars of all repos
        if (this.repos[i].stargazers_count !== null && this.repos[i].stargazers_count > 0) {
          this.starsNameOfRepos.push(this.repos[i].name);
          this.starsOfRepos.push(this.repos[i].stargazers_count);
        }

        // Largest repository
        // TODO: size needs to be set relative to the min and max size of all repos
        if (this.repos[i].size !== null && this.repos[i].size > 1000) {
          this.sizeNameOfRepos.push(this.repos[i].name);
          this.sizeOfRepos.push(this.repos[i].size);
        }

        // Most forked repository
        // TODO: forks_count needs to be set relative to the min and max forks of all repos
        if (this.repos[i].forks_count !== null && this.repos[i].forks_count > 0) {
          this.forkNameOfRepos.push(this.repos[i].name);
          this.forkOfRepos.push(this.repos[i].forks_count);
        }
      }
      console.log('this.sizeOfRepos');
      console.log(this.sizeOfRepos);


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

      // Needed for updating the pie chart
      this.pieChartDataNumberOfLanguages = this.numberOfLanguageInReposWithoutDuplicates;

      // Getting the coding languages of each repository
      this.repos.forEach((repo) => {
        this.usersService.getUserRepoLanguagesData(repo).subscribe(languages => {

            repo.languages = [];

            Object.keys(languages).forEach((key) => repo.languages.push({
                name: key,
                frequency: languages[key]
              })
            );
            console.log('repo.languages');
            console.log(repo.languages);
            console.log(this.repos);
          }
        );
      });
      console.log('this.repos');
      console.log(this.repos);

      /* Safe
      this.usersService.getUserRepoLanguagesData(this.repos[0]).subscribe(languages => {
        this.languagesPerRepo.push(languages);
        console.log('languagesPerRepo');
        console.log(this.languagesPerRepo);
        filterLanguages(languages);
      });
      */
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

  // LINKS METHODS
  linkToWebsite(userLink: string) {
    window.open(userLink, '_blank');
  }

  linkToEmail(emailLink: string) {
    window.open('mailto: ' + emailLink, '_blank');
  }

  // GENERAL METHODS
  // count number of random string element duplicates in array
  countRandomStringElementDuplicatesInArray() {
    const counts: number[] = [];
    this.languageInRepos.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
  }

  resetPage(): void {
    window.location.reload();
  }
}
