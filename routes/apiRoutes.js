const router = require('express').Router();
const Workout = require('../models/Workout');

// get route for all workouts
// ** need to augment **
router.get('/workouts', (req, res) => {
  console.log("** GET /api/workouts hit **");
  Workout.find()
    .then(allWorkouts => {
      res.json(allWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

// post route for adding new workout
// ** didn't work til added put route **
router.post('/workouts', (req, res) => {
  console.log("** POST /api/workouts hit **");
  console.log(req.body);
  Workout.create({})
  .then(newWorkout => {
      console.log(newWorkout)
      res.json(newWorkout);
    })
    .catch((err) => {
      console.log(err);
    });
});

// put route for adding new exercise
// ** also necessary for post route to work **
router.put('/workouts/:id', (req, res) => {
  console.log("** PUT /api/workouts/:id hit **");
  console.log(req.body);
  Workout.findByIdAndUpdate(req.params.id, { $push : { exercises : req.body } })
    .then(newExercise => {
      console.log(newExercise)
      res.json(newExercise);
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;