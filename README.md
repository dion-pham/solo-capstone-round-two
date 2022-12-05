# ![image](https://i.imgur.com/3vjboFc.png) 
# aroundTwo

Welcome to aroundTwo! This is a clone of the clothing website, [Round Two](https://roundtwostore.com/). Users are able to create an account and browse for items that they like. They then can add items to their cart, adjusting quantity if they so choose. Once a user clicks "check out," the order is added to their purchase history. Please visit the live link [here](https://aroundtwo.onrender.com/).

# Getting started
1. Clone this repository
2. Install dependencies

   `pipenv install -r requirements.txt`

3. Create a .env file with settings that correspond with your given development environment. Ensure that you have a SQLite3 database connection URL present here as well. 
4. This starter utilizes all tables inside the `flask_schema` schema, as defined in the `SCHEMA` environment variable. For cloning purposes, replace the `SCHEMA` environment variable with a different name. NOTE: use snake_case naming convention when renaming `SCHEMA`. 
5. Run your pipenv shell, migrate database, seed database, and run Flask app. 

   `pipenv shell`
   
   `flask db upgrade`
   
   `flask seed all`
   
   `flask run`
   
6. In a second terminal window, change your directory to `react-app` and install dependencies. 

   `npm install`
   
   `npm start` to run the React App. 
   
7. Please note that there should be two active terminals - 1 in the backend (root directory with pipenv shell where the requirement.txt is) and 1 in the frontend (react-app).

# Navigation
![image](https://user-images.githubusercontent.com/68131808/205548365-9591ebad-37d4-480f-a0cb-9e785e059957.png)
![image](https://user-images.githubusercontent.com/68131808/205548402-904b9568-2d59-4e98-ab05-b85a1fb8e7f7.png)
![image](https://user-images.githubusercontent.com/68131808/205548447-305ae629-7993-483e-b2ee-742d1448f241.png)


# [MVP Core Features](https://github.com/dion-pham/solo-capstone-round-two/wiki/Feature-List)
Click above for details of the features implemented in this clone.

# Features to be implemented in the future
* CRUD (Create, Read, Update, Delete) feature for item reviews.
* CRUD (Create, Read, Update, Delete) feature for item wishlist.
* Ability to browse and filter items by categories.
* Fully-functional search bar that filters by key words. 

# Built with: 

Frameworks, platforms, and libaries

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

Database:

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

HOSTING:

![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

# Contact Me: 
<div id="badges">
  <a href="https://www.linkedin.com/in/dinhan-dion-pham-9b4ab0152/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="https://github.com/dion-pham">
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="Github Badge"/>
  </a>
</div>
