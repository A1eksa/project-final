# Todo and habit tracker

This Todo and Habit tracker application is a student project developed by Aleksa Safranko & Jessi Nygren Walhed as final project during Technigos 24 weeks Frontend Bootcamp.
Our idea was to create a Todo and Habit tracker where several features like local time, weather and motivational thoughts are all combined in a dashboard view.

## How we built it and what we learned 👩‍💻

### Frontend

This is a multi-page React application built using React router and Redux as state manager. We started building the backend with signup and signin logic that takes a user directly to the Dashboard. The Dashboard is a restricted area where we have implemented authentication and only the specific registred user can have access to their content.

A user can post, edit, delete and complete created todos and habits fetched from the database. In the Habit tracker section we have also implemented a progress bar for each specific habit. A user injects duration and regularity data in the post and that data is stored in Redux store to be used for calculating the progress in the Habit tracker component.

Additonal feature is Dark mode done in Styled components and CSS variables.

### Backend

We have also developed the Backend for this application which consists of a RESTful API built with Node.js and Express and with data collected via MongoDB and mongoose.


## Additional Packages used

-Moment.js
-Sweetalert
-React icons
-Styled components


## Setup

👉🏽 To run this project:
- Download it locally.
- Change URL in server.js (backend folder) and in constants.js (frontend folder) to localhost. 
- Npm install both in Backend and Frontend folders. 
- Run backend with npm run dev. and frontend with npm start.

## View it live

✨ Frontend:https://musing-austin-306143.netlify.app/
🔥 Backend :https://aleksa-jessi-final-project.herokuapp.com/


## Find us here 👯‍♀️

<a href="https://a1eksa-portfoliotechnigo.netlify.app/"> Aleksa Safranko</a> 
<a href="https://github.com/hemmahosjessi">Jessi Nygren Walhed</a>. 
