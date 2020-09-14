//importing mongoose to create workout Model
const mongoose = require("mongoose");

//defining workout schema
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    //workout schema has a date and a collection of excercises
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Workout type is required"
        },
        name: {
            type: String,
            trim: true,
            required: "Workout type is required"
        },
        duration: {
            type: Number,
            required: "Workout duration is required"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
//export Workout model
module.exports = Workout;