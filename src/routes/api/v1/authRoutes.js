const router = require("express").Router();

const authController = require("../../../controllers/authController");

module.exports = app => {
    /* Creating a route for the loginUser function in the userController.js file. */
    router.post("/auth/login", authController.loginUser);

    /* This is a route that is used to reset the password of a user. */
    router.post("/auth/reset-password", authController.resetPassword);

    /* This is a route that is used to send a password reset link to the user's email address. */
    router.post("/auth/forgot-password", authController.forgotPassword);

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