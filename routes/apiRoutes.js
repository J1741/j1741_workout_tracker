const router = require('express').Router();
const Workout = require('../models/Workout');

// get route for all workouts
router.get('/workouts', (req, res) => {
  console.log("** GET /api/workouts hit **");
  Workout.find({})
    .then(allWorkouts => {
      res.json(allWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

// TESTING: post route for add a new workout
// router.post('/workouts', (req, res) => {
//   console.log("** POST /api/workouts hit **");
//   Workout.create(req.body)
//   .then(newWorkout => {
//       console.log(req.body)
//       res.json(newWorkout);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });


module.exports = router;