/**
 * Created by Owner on 7/4/2016.
 */

'use strict';

const nedb = require('nedb'), db = new nedb({filename: './data/proposals-db.json', autoload: true});
this.data = [];

class DataHandler {
    constructor() {
        db.loadDatabase();
    }

    addData(data) {
        db.insert(data, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
}

module.exports = DataHandler;