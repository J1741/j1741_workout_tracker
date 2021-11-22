const router = require('express').Router();
const Workout = require('../models/Workout');

// get all workouts
router.get('/workouts', (req, res) => {
  console.log("** /api/workouts hit **");
  Workout.find({})
    .then(allWorkouts => {
      res.json(allWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
})

module.exports = router;