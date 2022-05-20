const { DB_NAME } = require('../../config/db.config');


const createDB = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;


const dropDB = `DROP DATABASE IF EXISTS ${DB_NAME}`;

const createTableUsers = `
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    email VARCHAR(255) NOT NULL UNIQUE, 
    first_name VARCHAR(150) NOT NULL, 
    last_name VARCHAR(150) NOT NULL, 
    password VARCHAR(250) NOT NULL, 
    phone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;


const createPasswordResetsTable = `
CREATE TABLE IF NOT EXISTS password_resets (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;


const createPasswordResetsUserForeignKeys = `
ALTER TABLE password_resets ADD CONSTRAINT password_resets_user_id_users_id FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE;
`;

module.exports = {
    createDB,
    dropDB,
    createTableUsers,
    createPasswordResetsTable,
    createPasswordResetsUserForeignKeys
}