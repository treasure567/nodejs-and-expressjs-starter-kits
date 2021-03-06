/* Importing the validator module. */
const validator = require('validator');

/* Exporting the signup function. */
const signup = (email, password, phone, first_name, last_name) => {
    /* Creating an empty object. */
    const errors = {};
    /* Checking if the phone number is empty and if it is, it will return an error message. */
    if (validator.isEmpty(phone)) {
        errors["phone"] = "Phone is Required"
    } else
    /* Checking iYf the phone number is valid. */
    /* Optional Parameter is the Specifc Country Locale*/
    if (!validator.isMobilePhone(phone, 'en-NG')) {
        errors["phone"] = "Phone must be in Nigerian Format"
    }
    /* Checking if the first name is empty and if it is, it will return an error message. */
    if (validator.isEmpty(first_name)) {
        errors["first_name"] = "First Name is required"
    }
    /* Checking if the last name is empty and if it is, it will return an error message. */
    if (validator.isEmpty(last_name)) {
        errors["last_name"] = "Last Name is Required"
    }
    /* Checking if the email is empty and if it is, it will return an error message. */
    if (validator.isEmpty(email)) {
        errors["email"] = "Email cannot be blank"
    }
    /* Checking if the email is valid. */
    if (!validator.isEmail(email)) {
        errors["email"] = "Not a valid email address";
    }
    /* Checking if the password is empty and if it is, it will return an error message. */
    if (validator.isEmpty(password)) {
        errors["password"] = "Password cannot be blank";
    }
    /* Checking if the password is valid. */
    if (!validator.isAscii(password)) {
        errors["password"] = "Not a valid password";
    }
    /* Checking if the password is valid. */
    if (!validator.isLength(password, { min: 4, max: 12 })) {
        errors["password"] = "Ensure that your password has a minimum of 4 characters and maximum of 12 characters";
    }
    /* Returning an object with two keys, errors and valid. The errors key is an object that contains
    all the errors that were found in the validation process. The valid key is a boolean that is
    true if there are no errors and false if there are errors. */
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

const signin = (email, password) => {
    const errors = {};

    /* Checking if the email is empty and if it is, it will return an error message. */
    if (validator.isEmpty(email)) {
        errors["email"] = "Email cannot be blank"
    }
    /* Checking if the email is valid. */
    if (!validator.isEmail(email)) {
        errors["email"] = "Not a valid email address";
    }
    /* Checking if the password is valid. */
    if (!validator.isAscii(password)) {
        errors["password"] = "Not a valid password";
    }
    /* Checking if the password is valid. */
    if (!validator.isLength(password, { min: 4, max: 12 })) {
        errors["password"] = "Ensure that your password has a minimum of 4 characters and maximum of 12 characters";
    }
    /* Returning an object with two keys, errors and valid. The errors key is an object that contains
    all the errors that were found in the validation process. The valid key is a boolean that is
    true if there are no errors and false if there are errors. */
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

const validateIdAsNumeric = (id) => {
    const errors = {};
    if (!validator.isNumeric(id)) {
        errors["id"] = "Request ID must be numeric";
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}


module.exports = {
    signup,
    signin,
    validateIdAsNumeric
}