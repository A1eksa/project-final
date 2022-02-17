# Todo and habit tracker

Todo and habit tracker is a student project developed by <a href="https://a1eksa-portfoliotechnigo.netlify.app/">Aleksa</a> and <a href="https://github.com/hemmahosjessi">Jessi</a>.Our idea was to create a todo and habit tracker where several features like local time, weather and motivational thoughts are all combined in a dashboard version.

## How we built it and what we learned 👩‍💻

### Frontend

This is a multi-page React application built using React router and Redux as state manager.We started by building the backend with signup and signin logic that takes a user directly to the Dashboard. The Dashboard is a restricted area where we have implemented authentication and only registred users can have access.

A user can post, edit, delete and complete created todos and habits fetched from the database. In the habit tracker section we have also implemented a progress bar done for each specific habit. A user injects the neccessary data from the frontend and that data is stored in Redux store to be used for calculating the progress in the Habit tracker component.

Additonal feature is Dark mode done in Styled components and CSS variables.

### Backend

We have also developed the Backend for this application which consists of a RESTful API built with Node.js and Express and with data collected via MongoDB and mongoose.

### Additional Packages used

-Moment.js
-Sweetalert
-React icons
-Styled components

### Setup

To run this project, download it locally and npm install. Run server with npm run dev and frontend with npm start.

## View it live

✨ Frontend:https://musing-austin-306143.netlify.app/
🔥 Backend :https://aleksa-jessi-final-project.herokuapp.com/
