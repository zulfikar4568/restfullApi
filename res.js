'use strict';

exports.ok = function(values, res) {
    var data = {
        'status': 200,
        'values': values
    };

     res.json(data);
     res.end();
};


//response nested matakuliah
exports.oknested = function (values, res){
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item) => {
        //tentukan key grup
        if(akumulasikan[item.nama]){
            //buat variable grup nama mahasiswa
            const group = akumulasikan[item.nama];
            //cek isi array adalah matkul
            if(Array.isArray(group.matkul)){
                group.matkul.push(item.matkul);
            }else{
                group.matkul = [group.matkul, item.matkul];
            }
        }else{
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status': 200,
        'values': values
    };

     res.json(data);
     res.end();
}