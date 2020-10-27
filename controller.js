'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi Rest API ku berjalan ok", res);
};

//menampilkan data semua mahasiswa
exports.tampilsemua = function (req, res){
    connection.query("SELECT * FROM mahasiswa", function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data semua berdasarkan id

exports.tampilberdasarkanid = function (req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id = ?", [id],
        function (error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
        });
};