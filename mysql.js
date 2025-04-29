const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hopihari_db',
    port: 3307,
});

exports.execute = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, results) => {
            if (error) {
                reject(error);
            }else {
                resolve(results);
            }
        });
    });
}