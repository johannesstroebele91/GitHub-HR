# 1. Summary

This mobile first web application was developed for the [project 119400A](https://www.hdm-stuttgart.de/vorlesung_detail?vorlid=5212594) ([Prof. Dr. Joachim Charzinski](https://www.hdm-stuttgart.de/person_view_kuerzel?kuerzel=charzinski)) with the lecturer [Tobias Schneider](https://www.hdm-stuttgart.de/kontakt/suche_ergebnis_liste?Id=6375853) at the Stuttgart Media University. In 2024, I did a complete overhaul to make it work with the present Angular, Angular Material, and ng2-charts versions.

The goal is providing the human resources a more detailed picture of the coding qualifications GitHub users. The reason for this is that more and more software development job applicants use GitHub to show their coding projects.

For example, which programming languages they most frequently code with, how many people follow them and how often they code in general. This may help them to easier and better evaluate the technical coding qualifications of the applicants.

# 2. Application

The application is explained in more detailed on the [wiki page](https://github.com/johannesstroebele91/GitHubUserDashboard/wiki/Application-Explanation). The website can ba accessed locally by using the test username (test@gmail.com) and password (password).

# 3. File Structure

The code for this web application was developed, versioned, and managed using Git. A GitHub repository was used for storing the application code online. This is a quick overview of the files:

* dist: the compiled code/libraries meant for production
* node_modules: libraries and dependencies for packages, used by Node package manager
* src: files to build and develop the project (original source files), before being
  compiled into fewer files to dist/ directory
  * components: e. g. login and search
  * assets: e.g. logo, avatar picture
  * environments: environment for production
  * models: interfaces for the user, repository, and login-credentials
  * services: for making GitHub REST API calls
    and exams (hide and show certain elements)
  * pages: includes all of the application HTML pages
  * stylesheets: styling of the application
  * main.ts: bootstraps the application (it loads everything and controls the startup of the application)
  * index.thml: starting point of the application
    (JavaScript code for inserting reusable components, login functionality,
    working links due to different routing with Express)
* .gitignore: text file that tells Git which files or folders to ignore in a project
* angular.json: provides workspace-wide and project-specific configuration defaults for build and development tools provided by the Angular CLI
* package.json: provides metadata of the project as well as handles the
  dependency management with Node package manager
* proxy.conf.json: used for setting up proxy for API requests
* server.js: main configuration file for the Express application to handle actions
  such as the HTTP server, proxying API requests, routing, and serving of static files

# 4. Design Mockup

It was created with [Figma](https://www.figma.com/) based on the [Concept](https://github.com/johannesstroebele91/GitHub_User_Dashboard/wiki/Concept/). The link to the design can be found here: [Figma GitHub User Dashboard](https://www.figma.com/file/nWGswJQDBkAM0IAn1371YH/GitHub-User-Dashboard)

![image](https://user-images.githubusercontent.com/33202527/83942333-db379a80-a7f2-11ea-998c-987b91653fec.png)

# 5. Technology Stack

_This technology stack is based on the [ME?N Stack](https://en.wikipedia.org/wiki/MEAN_(solution_stack)). It is a a free and open-source JavaScript software stack for building dynamic web sites and web applications. A more detailed explanation can be found on the [wiki page](https://github.com/johannesstroebele91/GitHubUserDashboard/wiki/Technology-Stack)._

* Frontend: [HTML](https://www.w3.org/TR/html52/), [SCSS](https://sass-lang.com/), [TypeScript](https://www.typescriptlang.org/)
* Frontend framework: [Angular CLI version 9.0.5](https://github.com/angular/angular-cli)
* UI component library: [Angular Material version 9.2.0](https://material.angular.io/)
* Version control system: [Git](https://git-scm.com/)
* Git repository hosting: [Github](http://github.com/)
* Data source: [GitHub REST API v4](https://developer.github.com/v4/)
* Data visualization library: [ng2-charts](https://valor-software.com/ng2-charts/)
* Deployment: [Vercel](johannes-strbeles-projects);

# 6. Development and deployment instructions

A more detailed explanation can be found on the [wiki page](https://github.com/johannesstroebele91/GitHubUserDashboard/wiki/Application-Explanation)

- Development Server: Run ng serve for a local development server accessible at http://localhost:4040/. Changes to source files trigger automatic reloading.
- Build: Run ng build to create production-ready build artifacts stored in the dist/ directory. Use the --prod flag for optimized production builds.
- Production Deployment: After building, run node server.js to start the production server. Deployment can be automated using Vercel's continuous integration features.

# 7. Endpoints

A more detailed explanation can be found on the [wiki page](https://github.com/johannesstroebele91/GitHubUserDashboard/wiki/Application-Explanation)

* "/githubapi/": getting user, repos, and coding languages data from the GitHub API

# 8. Lessons Learned

A more detailed explanation can be found on the [wiki page](https://github.com/johannesstroebele91/GitHubUserDashboard/wiki/Lessons-Learned)

* It was very insightful to conduct user interviews
* Designing a high fidel design mockup took to long with [Figma](https://www.figma.com/) (better use Balsamiq and spent more time on the development)
* Services for making HTTP requests to the GitHub API was most interesting to learn
* Angular Material reactive forms 
* Angular GET-, PUT-, POST-requests with realtime Firebase
* Email/Password registration and login via Firebase authentication 
* Protect routs with authentication guards
* Interceptors for checking authentication automatically for each request
* Deployment with Vercel

# 9. Potential Improvements

A more detailed explanation can be found on the [wiki page](https://github.com/johannesstroebele91/GitHubUserDashboard/wiki/Potential-enhancement)

* Implement comparison of one GitHub user with others (e. g. with charts and tables)
* Create more and better visualizations to give even deeper insights using ng2-charts
* Implement search for specific coding language for all users (filters would be great)
* Setup database for registered users and connect it to the application
* Implement testing with e. g. Karma and Jasmine
