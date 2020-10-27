var mysql = require('mysql');

//koneksi
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Zi085221249552',
    database: 'restfullApi'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql terdeteksi');
});

module.exports = conn;