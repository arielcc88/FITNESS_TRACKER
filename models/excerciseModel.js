//importing mongoose to create Schema
const mongoose = require("mongoose");

//define Schema
const Schema = mongoose.Schema;
const ExcerciseSchema = new Schema({
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
});




