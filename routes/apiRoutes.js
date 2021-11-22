const router = require('express').Router();
const Workout = require('../models/Workout');

// add api routes - controllers separate?
router.get('/test', (req, res) => {
  console.log("in test api get route!")
  res.send('hello there!');
})

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