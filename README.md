<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="frontend/src/assets/logo/logo.png" alt="Logo" width="100" height="100">

  <h3 align="center">Movies Database (Vuex && MySQL)</h3>

  <p align="center">
    Creating a custom movie database for personal use.
    <br />
    <a href="https://github.com/alexmil-sk/vue3-vuex-loc_storage-api-mysql-docker-movies"><strong>Explore the docs »</strong></a>
    <br />
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project was created for the educational purpose of developing a full-stack application that uses a MySQL database to store data about the user's movies, which communicates with the frontend using REST API requests.

The application consists of backend & frontend parts.
The backend part is created using Node.js .
The frontend part was created using VueJS & Vuex.
The first is that a custom movie catalog is created using MySQL. It is possible to add movies, edit and delete from the user directory.
The second is that the existing movie catalog is downloaded from the mock service. For this catalog, it is possible to download a range of movies, delete them and add them to favorites.

Additionally, a directory of employee contacts has been created. Employee data was downloaded from the mock service. A separate card containing complete information has been created for each employee.

### Built With

This section should list the frameworks and libraries used to create and upload the project.

* [![Node][Node.js]][Node-url]
* [![Vite][Vite.js]][Vite-url]
* [![Vue][Vue.js v.3]][Vue-url]
* [![Vuex][Vuex v.4]][Vuex-url]
* [![VueRouter][VueRouter v.6.5]][VueRouter-url]
* [![VeeValidate][VeeValidate]][VeeValidate-url]
* [![Axios][Axios]][Axios-url]
* [![Express][Express]][Express-url]
* [![Firebase 9][Firebase]][Firebase-url]
* [![MySQL][MySQL]][MySQL-url]
* [![Adminer][Adminer]][Adminer-url]
* [![DockerHub][DockerHub]][DockerHub-url]

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

To use application, you need to load on your computer Node.js by the following command:

* npm

  ```sh
  npm install npm@latest -g
  ```

### Installation for GitHub version

1. Download the code fron GitHub or clone the repo.

   ```sh
   git clone https://github.com/alexmil-sk/vue3-vuex-loc_storage-api-mysql-docker-movies
   ```

2. Install NPM packages Backend & Frontend

   ```sh
   npm install
   ```

3. Run MySQL service on your computer (backend).

4. Run Backend from the backend folder with the command:

   ```sh
   npm run dev
   ```

5. Run Frontend from the frontend folder with the same command:

   ```sh
   npm run dev
   ```

### Installation for DockerHub version without downloading

1. You don't need to download the project code from GitHub.

2. You only need to take the docker-compose.pub.yml file from the project folder on GitHub.

3. To start the project in the terminal, you need to type the command:

   ```sh
   $>docker-compose -f docker-compose.pub.yml up
   ```

4. To access the MySQL database administration zone using Adminer, you must use a password, located in docker-compose.yml file in the section:

   ```js

  backend:
  environment:
  MYSQL_USER: root
  MYSQL_PASSWORD: password

   ```

### Installation for Docker Local version (to be able to edit application on your computer)

1. Download the application from the repository on GitHub.

2. Run MySQL service on your computer (backend).

3. Download, install and start Docker Desktop. (link is below).

4. In the terminal, go to the root folder of the application.

5. Run the command:

   ```sh
   $>docker-compose up
   ```

6. When the application starts working, you can edit the application files located on your computer, with instant display of the results in the browser.

7. To access the MySQL database administration zone using Adminer, you must use a password, located in docker-compose.yml file in the section:

   ```js

  backend:
  environment:
  MYSQL_USER: root
  MYSQL_PASSWORD: password

  ```

<!-- USAGE EXAMPLES -->
## Usage

This application can be used to create a custom movie database, which will contain all the information about the movies.
To start using the application, you need to register to log in to the application. Authorization is performed using Firebase Auth.

<!-- CONTACT -->
## Contact

Aleksej Miloradov - alexmlrdv@gmail.com

Project Link: [https://github.com/alexmil-sk/vue3-vuex-loc_storage-api-mysql-docker-movies](https://github.com/alexmil-sk/vue3-vuex-loc_storage-api-mysql-docker-movies)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)

<!-- MARKDOWN LINKS & IMAGES -->
[Node.js]: https://img.shields.io/badge/Node.js----brightgreen
[Node-url]: https://nodejs.org/
[Vite.js]: https://img.shields.io/badge/Vite.js----ff69b4
[Vite-url]: https://vitejs.dev/
[Vue.js v.3]: https://img.shields.io/badge/Vue.js----4FC08D
[Vue-url]: https://vuejs.org/
[Vuex v.4]: https://img.shields.io/badge/Vuex----9cf
[Vuex-url]: https://vuex.vuejs.org/
[VueRouter v.6.5]: https://img.shields.io/badge/VueRouter----orange
[VueRouter-url]: https://v3.router.vuejs.org/
[VeeValidate]: https://img.shields.io/badge/VeeValidate----blueviolet
[VeeValidate-url]: https://vee-validate.logaretm.com/v3/
[Axios]: https://img.shields.io/badge/Axios----yellowgreen
[Axios-url]: https://axios-http.com/
[Express]: https://img.shields.io/badge/Express----lightgrey
[Express-url]: https://expressjs.com/
[Firebase-url]: https://firebase.google.com/
[Firebase]: https://img.shields.io/badge/Firebase----important
[MySQL]: https://img.shields.io/badge/MySQL----informational
[MySQL-url]: https://www.mysql.com/
[Adminer]: https://img.shields.io/badge/Adminer----red
[Adminer-url]: https://www.adminer.org/
[DockerHub]: https://img.shields.io/badge/DockerHub----9cf
[DockerHub-url]: https://hub.docker.com/
