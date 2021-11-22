const { Schema, model } = require('mongoose');

const workoutSchema = new Schema(
  {
    // date
    day: {
      type: Date,
      default: Date.now
    },
    // exercise
    exercises: [{

      name: {
        type: String
      },

      type: {
        type: String,
      },

      weight: {
        type: Number,
      },

      sets: {
        type: Number
      },

      reps: {
        type: Number
      },

      duration: {
        type: Number
      },

      distance: {
        type: Number
      }

    }],
  },
  {
    toJSON: {
      // ** need for summing durations and distances **
      virtuals: true,
    }
  }
);

const Workout = model('workout', workoutSchema);

module.exports = Workout;