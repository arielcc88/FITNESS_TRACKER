/**
 * IMPORTS
 */
//APP CONFIG
const express = require("express");
const PORT = process.env.PORT || 8000;
const path = require("path");
//EXPRESS APP
const app = express();
//DB SEEDER
require("./seeders/seed.js");
//ROUTERS
const exerciseRouter = require("./routes/exercise_router");
const apiRouter = require("./routes/api_router");

//BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//STATIC RESOURCES
app.use(express.static(path.join(__dirname, "/public")));
//app.use(express.static("public"));

//ROUTE MIDDLEWARES
app.use("/exercise", exerciseRouter);
app.use("/api", apiRouter);


//STARTING SERVER
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("SERVER STARTED: http://localhost:" + PORT);
});
