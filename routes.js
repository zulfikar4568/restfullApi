'use strict';

module.exports = function name(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
}