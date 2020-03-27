# GithubuserDashboard

## Summary
This mobile first web dashboard about GitHub users was developed for the [project 119400A](https://www.hdm-stuttgart.de/vorlesung_detail?vorlid=5212594) ([Prof. Dr. Joachim Charzinski](https://www.hdm-stuttgart.de/person_view_kuerzel?kuerzel=charzinski)) at the Stuttgart Media University.
The goal is providing human resources a more detailed picture of software development job applicants based on their GitHub user data. 
For example, which programming languages they most frequently code in, how many people follow them and how often they code in general. 


## Technology Stack
* Frontend: [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5
* UI component library: [Angular Material](https://material.angular.io/) version 9.2.0
* Deployment: [Netlify](https://netlify.com/)
* Repository and Version Control System: [Github](http://github.com/)
* Data: [GitHub REST API v3]()

## Important
* Development server: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Build: Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Running unit tests: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Endpoints
   * "/userapi": getting user data from the GitHub API
   * "/languagesapi": getting the coding languages for each repository the GitHub API

## Learnings
* Directives: Components, structural directives, attribute directives
* Routing and Navigation
* Dependency injection and services
* Forms
* Observables
* TypeScript (e.g. classes, interfaces)
* REST APIs (GitHub REST API v3)
* CSS (SCSS, Angular Flex-Layout)
* Version control with git

## Future
* Design prototype: [Figma](https://www.figma.com/)
* Data visualization: e.g. [ngx-charts](https://github.com/swimlane/ngx-charts)
* [Testing with Karma and Jasmine](https://angular.io/guide/testing)
* [RxJS for dealing with more than one event or asynchronous computation](https://angular.io/guide/rx-library)
