# Employee Directory: ReactJS

## Overview

This application is an employee directory created with React. The project breaks up the application's UI into components, manages component state with React Hooks, and responds to user events to sort by first name, sort by last name, and/or filter by employee department.

I used this project as an exercise in practicing React functional components with React Hooks like `useEffect`. The project was created with `create-react-app` and is deployed to GitHub pages here: [connietran-dev.github.io/react-employee-directory](https://connietran-dev.github.io/react-employee-directory/)


## Methodology

This web application utilizes the [Material-UI](https://material-ui.com/) framework for React UI components and utilizes a custom EmployeeCard component. The application also utilizes React hooks (`useState`). See App.js.

Initially, I looked into some of the pre-built components below to display the employee information that would also allow for sorting and/or filtering:

* https://vestride.github.io/Shuffle
* https://github.com/mbrn/material-table 
* https://react.rocks/tag/Sort

In fact, the list [here](https://github.com/brillout/awesome-react-components) has a long list of awesome React components and libraries that can be utilized.

I even started a separate branch and attempted to develop with some of the example code provided in the [smart-webcomponents-react](https://www.npmjs.com/package/smart-webcomponents-react) npm package and the Smart HTML Elements [website](https://www.htmlelements.com/demos/cardview/filtering-and-sorting).

Ultimately, I landed on using Material-UI for some components and developed custom sorting and filtering functions in App.js with the help of the article [here](https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/).


### **React Hooks**

I also took this project as an opportunity to practice utilizing functional components with React Hooks (`useState`) rather than using class components (`class App extends React.Component`). In this process, I learned the concept behind setting state with hooks and even ran into a few gotchas with sorting and filtering my arrays. 

Thankfully, I had a little reminder from my instructor and from [StackOverflow](https://stackoverflow.com/questions/58087858/sort-an-array-with-react-hooks) that `array.prototype.sort` sorts your array in place - thus, requiring that you spread your array `...employees` which clones your array to sort before setting it as the `employees` state with `setEmployees`. 


### **Deploying with gh-pages**

I also utilized the npm package `gh-pages` to deploy the create-react-app to GitHub Pages with the help of the article [here](https://medium.com/@bennirus/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2). Through this process, I learned a few things about deploying a React app to GitHub Pages:

* If you simply go to Settings to set up your GitHub Page, you must (currently) use a branch labelled `master` in order to deploy (even with the `gh-pages` package). 
  * I initially  changed my branch to `main` in support of a more inclusive term and in opposition of racially insensitive programming terminology. I had help changing mine with thanks to [Scott Hanselman](https://www.hanselman.com/blog/EasilyRenameYourGitDefaultBranchFromMasterToMain.aspx). 
  * However, when I tried to deploy with gh-pages with a `main` branch, my application did not deploy to the URL until I changed it back to master.
* When deploying using the `gh-pages` package, it will create a separate `gh-pages` branch. I also tried deploying from other branches I had, such as the `material-sort` branch I created to test out using Material-UI to display and sort the cards. (The branch is also pushed up to this repo.) Deploying from this branch didn't seem to work, only if I deployed from the master branch.
* After a little experimentation, I also learned that if you `npm run deploy`, gh-pages will deploy and build your app even if you have not yet committed. Thankfully, I just changed the favicon before committing, but it was duly noted.


## App Functionality

### User Story

As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

### Acceptance Criteria

Given a list of employees, when the user loads the page, employees should render. The user should be able to:

  * Sort employees by at least one category
  * Filter employees by at least one property
