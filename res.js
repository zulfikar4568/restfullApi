'use strict';

exports.ok = function name(values, res) {
    var data = {
        'status': 200,
        'values': values
    };

     res.json(data);
     res.end();
}