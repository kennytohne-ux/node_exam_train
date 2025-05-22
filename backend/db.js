const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rdl_management'
});

db.connect(function(err){
    if(err) throw err;
    console.log('Database connected 🟢');
});

module.exports = db;