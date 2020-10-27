'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function name(req, res) {
    response.ok("Aplikasi berjalan ok");
};