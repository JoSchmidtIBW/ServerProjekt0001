import mariaDB from "mariadb";

//const mariadb = require('mariadb');
const mariadb = mariaDB;
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mubea2020!',
    database: 'loginDBX',
    connectionLimit: 5
});

export default pool;