'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi Rest API ku berjalan ok", res);
};

//menampilkan data semua mahasiswa
exports.tampilsemua = function (req, res){
    connection.query("SELECT * FROM mahasiswa", function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};