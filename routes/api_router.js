//IMPORT EXPRESS
const express = require("express");
//IMPORT PATH
const path = require("path");
//IMPORT MODELS
const db = require("../models");
//DEFINE EXPRESS ROUTER
const router = express.Router();
//IMPORTING HELPERS
const helper = require("../utils/helpers");

//--------
//API ROUTES
//--------
router
    .route("/workouts") //returns all workouts
    .get((req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                //call helper to add totalDuration to each workout
                const dbWorkoutMod = helper.getTotalDurationTime(dbWorkout);
                res.json(dbWorkoutMod);
            })
            .catch(err => {
                res.json(err);
            });
    });

router
    .route("/workouts/:id")
    .put((req,res) => {
        db.Workout.findOneAndUpdate({ "_id": req.params.id }, {
            $push: {
                "exercises": req.body
            }
        },
        { new: true, runValidators: true })
        .then((dbWorkout) => {
            console.log("workout inserted ", dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });


module.exports = router;