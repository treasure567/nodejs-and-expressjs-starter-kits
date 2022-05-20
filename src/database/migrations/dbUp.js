const { createDB: createDBQuery } = require('../queries/tables_queries');
db = require('../../config/db.config');

(() => {
    db.query(createDBQuery, (err, _) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log('DB Created');
        process.exit(0);
    });
})();