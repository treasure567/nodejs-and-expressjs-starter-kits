/* Importing the queries from the tables_queries.js file. */
const {
    createTableUsers: createTableUsersQuery,
    createPasswordResetsTable: createPasswordResetsTableQuery,
    createPasswordResetsUserForeignKeys: createPasswordResetsUserForeignKeysQuery
} = require('../queries/tables_queries');


/* Importing the database configuration file. */
db = require('../../config/db.config');

(() => {
    /* Creating a table called users. */
    db.query(createTableUsersQuery, (err, _) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log('Users Table Created Successfully');
    });

    /* Creating a table called password_resets. */
    db.query(createPasswordResetsTableQuery, (err, _) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log('Password Resets Table Created Successfully');
    });

    /* Creating a foreign key between the password_resets and users tables. */
    db.query(createPasswordResetsUserForeignKeysQuery, (err, _) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log('Password_resets & Users Foreign Keys Created Successfully');
        process.exit(0);
    });

})();