//CALCULATES TOTAL DURATION TIME OF WORKOUT
const getTotalDurationTime = (arrWorkout) => {
    const modWorkoutArray = arrWorkout.map((workout) => {
        let workoutMod = workout.toObject();
        let totalDuration = 0;
        //check array of exercises to calculate total duration (sum of all exercises' duration)
        for (let exercise of workoutMod.exercises) {
            if(exercise.duration !== undefined && exercise.duration > 0){
                //sum up to totalDuration
                totalDuration += exercise.duration;
            }
        }
        //add totalDuration to workout object
        workoutMod["totalDuration"] = totalDuration;
        return workoutMod;
    });
    return modWorkoutArray;
}


module.exports = {
    getTotalDurationTime
}