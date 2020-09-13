//import express to call router
const express = require("express");
//call in path to load html files
const path = require ("path");
//define router from express
const router = express.Router();

//--------
//ROUTES
//--------
router
    .route("/")
    .get((req,res) => {
        res.sendFile(path.join(__dirname + "/../public/exercise.html"));
    });


//export router
module.exports = router;