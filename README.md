# Summary
This mobile first web dashboard was developed for the [project 119400A](https://www.hdm-stuttgart.de/vorlesung_detail?vorlid=5212594) ([Prof. Dr. Joachim Charzinski](https://www.hdm-stuttgart.de/person_view_kuerzel?kuerzel=charzinski)) at the Stuttgart Media University.

The goal is providing human resources a more detailed picture of the coding qualifications of software development job applicants based on their GitHub user data. For example, which programming languages they most frequently code in, how many people follow them and how often they code in general. This may help them to easier and better evaluate the technical coding qualifications of the applicants.

# Design
It was created with [Figma](https://www.figma.com/) based on the [Concept](https://github.com/johannesstroebele91/GitHub_User_Dashboard/wiki/Concept/). The link to the design can be found here: [Figma GitHub User Dashboard](https://www.figma.com/file/nWGswJQDBkAM0IAn1371YH/GitHub-User-Dashboard)

![image](https://user-images.githubusercontent.com/33202527/83942333-db379a80-a7f2-11ea-998c-987b91653fec.png)


# Technology Stack
_This technology stack is based on the [ME?N Stack](https://en.wikipedia.org/wiki/MEAN_(solution_stack)). It is a a free and open-source JavaScript software stack for building dynamic web sites and web applications_
* Frontend: [HTML](https://www.w3.org/TR/html52/), [SCSS](https://sass-lang.com/), [TypeScript](https://www.typescriptlang.org/)
* Frontend framework: [Angular CLI version 9.0.5](https://github.com/angular/angular-cli)
* UI component library: [Angular Material version 9.2.0](https://material.angular.io/)
* JavaScript Runtime environment: [Node.js for using Angular and the MEAN stack overall](https://nodejs.org/en/) 
* Version control system: [Git](https://git-scm.com/)
* Git repository hosting: [Github](http://github.com/)
* Data source: [GitHub GraphQL API v4](https://developer.github.com/v4/)
* Data visualization tool: [ngx-charts](https://github.com/swimlane/ngx-charts)

# Important
* Development server: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Build: Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Running unit tests: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Endpoints
   * "/userapi": getting user data from the GitHub API
   * "/languagesapi": getting the coding languages for each repository the GitHub API

# Learnings
* Directives: Components, structural directives, attribute directives
* Routing and Navigation
* Dependency injection and services
* Forms
* Observables
* TypeScript (e.g. classes, interfaces)
* REST APIs (GitHub REST API v3)
* CSS (SCSS, Angular Flex-Layout)
* Version control with git

# Future
* Design prototype: [Figma](https://www.figma.com/)
* Data visualization: e.g. [ngx-charts](https://github.com/swimlane/ngx-charts)
* [RxJS for dealing with more than one event or asynchronous computation](https://angular.io/guide/rx-library)
* [Testing with Karma and Jasmine](https://angular.io/guide/testing)
* Building a fully functional dynamic web application with the [MEAN stack (https://en.wikipedia.org/wiki/MEAN_(solution_stack)
