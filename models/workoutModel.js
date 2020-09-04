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
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Excercise"
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
//export Workout model
module.exports = Workout;