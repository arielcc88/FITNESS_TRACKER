const API = {
  async getLastWorkout() {
    //returns all existent workouts
    let res;
    try {
      res = await fetch("/api/workouts"); //api route to query DB
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    return json[json.length - 1]; //return only the last element of the array of workouts
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();
    return json;
  },
};
