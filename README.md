# Tikjobs-Angular and TikJobs_Back

Complete development of a website, including front-end, back-end and creation of a database through RestApi. 


The technologies used are the following:

**Front-end:** Angular, Typescript, JavaScript, Bootstrap, Sass, Ngx-pagination, FontAwesome.

**Back-end:** Node.js, Express, RestApi, MySQLWorkBench, Jsonwebtoken, Dayjs, Multer, SweetAlert2, SQL, CORS, Faker, Dotenv.

**Other resources:** Git, GitHub, Notion, npm, Heroku, Firebase, VisualStudioCode.

**ALL THE DATA INFORMATION IS FALSE:** we used faker to fill the database. So please, **use FALSE INFORMATION too** if you want to try our app and register as a company or a freelancer.

###### You can try the app here: https://tikjobs-3bd13.web.app/home


## If you want to download the back end of tikjobs:

1- You will need to do a npm install to install the ng module file and all the dependencies

2-  you will need to configure a related database (MySQL for example). 

3- To fill the database, you can use the scripts that are located in the scripts' component. All the info will be added directly from faker. 

4- You will need to connect the local data base with the back-end app. 

4.1- In the file called .env_sample , you can change the default info by your localhost info. 

5-You will also need to change it in the dbConfig.js file (to make it correspond with .env_sample).


## If you want to download the front end of tikjobs:

1-You will need to do a npm install to install the ng module file and all the dependencies.

2- You will need to change the heroku url in the services by your localhost url.

3- You will need to change the heroku url in the HTML of profesionales.component / users.components / user-view.component .


## Other information about the front end:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

**Development server**

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

**Code scaffolding**

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

**Build**

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

**Running unit tests**

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

**Running end-to-end tests**

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

**Further help**

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
