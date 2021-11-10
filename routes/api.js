const router = require("express").Router();
const Workout = require("../models/workout.js");
const Exercise = require("../models/exercise.js");

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .sort({ day: -1 }).limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .sort({ day: -1 }).limit(1)
    .then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
      res.sendStatus(500);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    (err, dbWorkout) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.send(dbWorkout);
      }
    }
  );
});

module.exports = router;
