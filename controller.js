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

//Menambahkan data mahasiswa
exports.tambahMahasiswa  = function (req, res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)", [nim, nama, jurusan],
        function (error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//Mengubah data berdasarkan id mahasiswa

exports.ubahData = function (req, res){
    var id = req.body.id;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id=?", [nim,nama,jurusan,id],
        function(error, rows, fields){
            if (error){
                console.log(error);
            }else{
                response.ok("Berhasil Ubah data", res);
            }
        });
};