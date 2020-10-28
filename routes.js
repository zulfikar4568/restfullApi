'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemua);
    
    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahMahasiswa);

    app.route('/ubah')
        .put(jsonku.ubahData);
    
    app.route('/hapus')
        .delete(jsonku.hapusMahasiswa);

    app.route('/tampilmatkul')
        .get(jsonku.tampilgroupmatkul);
}