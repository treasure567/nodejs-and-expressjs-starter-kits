const router = require("express").Router();

/* Importing the userController.js file. */
const userController = require('../../../controllers/usersController');

// /* Importing the hasAuth middleware. */
const { hasAuth } = require('../../../middleware/hasAuth')

/* Exporting the routes to the server.js file. */
module.exports = app => {
    /* Creating a new user. */
    router.post("/auth/register", userController.createUser);

    /* A route that is used to find all the users in the database. */
    router.get("/", userController.findAll);

    /* Telling the server to use the router for the api/v1 route. */
    app.use('/api/v1', router);

    // error handler
    /* This is a middleware that is used to catch any errors that may occur in the application. */
    app.use((err, req, res, next) => {
        /* This is a middleware that is used to catch any errors that may occur in the application. */
        res.status(err.statusCode || 500).send({
            message: err.message
        });
        next();
    });
};