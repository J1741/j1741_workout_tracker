const router = require('express').Router();
const Workout = require('../models/Workout');

// test route to make sure api routes are working
router.get('/test', (req, res) => {
  console.log("in test api get route!")
  res.send('hello there!');
})

// test route to get all workouts 
router.get('/test-all', (req, res) => {  
  Workout.find({})
    .then(testAllWorkouts => {
      res.json(testAllWorkouts);
    })
    .catch(err => {
      res.json(err);
    })
})

module.exports = router;