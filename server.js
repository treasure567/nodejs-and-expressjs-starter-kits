/* Importing the express module. */
const express = require("express");

/* Creating an instance of the express application. */
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


/* This is a simple route that returns a json object with a message. */
app.get("/", (req, res) => {
    res.json({ message: "Welcome to The NodeJs/Express Starter Kit" });
});


/* Importing the usersRoutes.js file and passing the app object to it. */
require("./src/routes/api/v1/usersRoutes.js")(app);


/* Importing the authRoutes.js file and passing the app object to it. */
require("./src/routes/api/v1/authRoutes.js")(app);


// set port, listen for requests
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});