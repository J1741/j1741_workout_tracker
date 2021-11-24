# J1741 Workout Tracker

## Description

Workout Tracker is an application that lets users enter, track, and view daily and weekly workout statistics.

Technologies used by the application include `Express.js`, `MongoDB`, and `mongoose` npm packages, as well as the `Node.js` JavaScript runtime.

The database for the deployed application is hosted on MongoDB Atlas, and the application itself was deployed on Heroku.

The deployed application can be accessed [here](https://glacial-beach-54449.herokuapp.com)

## Table of Contents

- [Usage](#usage)
- [Contributing](#contributing)
- [Deployed Application](#deployed-application)
- [Questions](#questions)

## Usage

### Adding Workouts

On the main page, users can enter a new workout by clicking the "New Workout" button, or add an exercise to an existing workout by clicking the "Continue Workout" button.

Each workout is associated with day, and one or more exercises.

### Adding Exercises

The application allows users to add two types of exercises to workouts: Resistance and Cardio

To add a resistance exercise, users should select the Exercise Type "Resistance" and enter the following:

- Exercise Name
- Weight (pounds)
- Sets
- Reps
- Duration (minutes)

To add a cardio exercise, the user should select the Exercise Type "Cardio" and enter the following info:

- Name
- Distance (miles)
- Duration (minutes)

### Last Workout

On the homepage of the application, an info card is displayed for the most recent workout, including:

- Date
- Total Workout Duration
- count of Exercises Performed
- Total Weight Lifted
- Total Sets Performed
- Total Reps Performed

### Dashboard

The workout dashboard displays two graphs:

- A line graph showing total workout duration (in minutes) for the most recent seven workouts
- A bar graph showing total weight lifted (in pounds) for the most recent seven workouts

## Contributing

Contributions to the Workout Tracker project are welcome!

The project repo can be forked here: https://github.com/J1741/j1741_workout_tracker

## Deployed Application

### Link

The application is deployed at the following Heroku URL: https://glacial-beach-54449.herokuapp.com

### Demo

The following GIF shows the deployed application:

# ![Alt text](./demo.gif?raw=true "GIF of workout tracker")

## Questions

Questions and inquiries about the project can be directed to the developer via GitHub: https://github.com/J1741

Or via email: jseventeen41@gmail.com
