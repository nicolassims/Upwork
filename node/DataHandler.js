/**
 * Created by Owner on 7/4/2016.
 */

'use strict';

const nedb = require('nedb'),
    db = new nedb({filename: './data/proposals-db.json', autoload: true});
this.data = [];

class DataHandler {
    constructor() {
        db.loadDatabase();
    }

    loadData(callback) {
        db.find({completed: '0'}, (err, docs) => {
            if (docs.length != null) {
                callback(docs);
            }
        });
    }

    updateData(data) {
        db.update({_id: data.id}, {
            building: data.building
            , roomNumber: data.roomNumber
            , submitter: data.submitter
            , problemDesc: data.problemDesc
            , assigned: data.assigned
            , completed: data.completed
            , status: data.status
            , date: data.date
        }, {
            upsert: true,
            returnUpdatedDocs: true
        });
    }

    addData(data) {
        db.insert(data, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    getDb() {
        db.find({}, (err, docs) => {
            return docs;
        });
    }
}

module.exports = DataHandler;