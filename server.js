/**
* IMPORTING EXPRESS
*/
const express = require("express");
//App PORT
const PORT = process.env.PORT || 8080;

/**
 * EXPRESS APP
 */
const app = express();

//BODY PARSER
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//STATIC RESOURCES
app.use(express.static("public"));

//APP ROUTES
// const appRoutes = 

//STARTING SERVER
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("SERVER STARTED ON PORT: " + PORT);
});
