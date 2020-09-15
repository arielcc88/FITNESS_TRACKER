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
//retrieves all existing workouts
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

//posting (creating) new workout
router
    .route("/workouts")
    .post((req, res) => {
        db.Workout.create({}) // empty workout object
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    });

//updating existing workout
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
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

// //1 week range (workouts)
// router
//     .route("/workouts/range")
//     .get((req,res) => {
//         db.Workout.find({}).sort({"day": 1}).limit(8)
//         .then((dbWorkout) => {
//             const dbWorkoutMod = helper.getTotalDurationTime(dbWorkout);
//             res.json(dbWorkoutMod);
//         })
//         .catch(err => {
//             res.json(err);
//         });
//     });

//1 week range (workouts)
router
    .route("/workouts/range")
    .get((req,res) => {
        //get total number of records.
        db.Workout.countDocuments({})
        .then((count) => {
            //with the count, extract the last 7 records.
            db.Workout.find({}).skip(count - 7)
            .then((dbWorkout) => {
                const dbWorkoutMod = helper.getTotalDurationTime(dbWorkout);
                res.json(dbWorkoutMod);
            })
            .catch(err => {
                res.json(err);
            });
        })
        .catch(err => {
            res.json(err);
        });
    });

module.exports = router;