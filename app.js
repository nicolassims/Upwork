/**
 * Created by Owner on 7/4/2016.
 */

'use strict';

class app {
    constructor() {
        app.loadServer();
    }

    static loadServer() {
        const HTTP = require('http'),
            PORT = 1337,
            SERVER = HTTP.createServer( (req, res) => {
                let httpHandler = function(err, str, contentType) {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('An error has occurred: ' + err.message);
                    } else if (contentType.indexOf('image') >= 0) {
                        res.writeHead(200, { 'Content-Type': contentType });
                        res.end(str, 'binary');
                    } else {
                        res.writeHead(200, { 'Content-Type': contentType });
                        res.end(str);
                    }
                };
                if (req.method == 'POST') {
                    if (req.headers['x-requested-with'] === 'formWriteRequest') {
                        app.writeFormData(req, res);
                    } else {
                        console.log("[405] " + req.method + " to " + req.url);
                        res.writeHead(405, "Method not supported", { 'Content-Type': 'text/html' });
                        res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
                    }
                } else if (req.url.indexOf('/javascripts/') >= 0) {
                    app.render(req.url.slice(1), 'application/ecmascript', httpHandler, 'utf-8');
                } else if (req.url.indexOf('/css/') >= 0) {
                    app.render(req.url.slice(1), 'text/css', httpHandler, 'utf-8');
                } else if (req.url.indexOf('/images/') >= 0) {
                    app.render(req.url.slice(1), 'image/jpeg', httpHandler, 'binary');
                } else {
                    app.render('public/views/index.html', 'text/html', httpHandler, 'utf-8');
                }
            }).listen(PORT, function() {
                console.log('-= Upwork server reporting for duty at http://127.0.0.1:' + PORT + ' =-');
            });
    }

    static render(path, contentType, callback, encoding) {
        const FS = require('fs');
        FS.readFile(__dirname + '/' + path, encoding ? encoding : 'utf-8', function (err, str) { // ternary
            callback(err, str, contentType);
        });
    }

    static writeFormData(req) {
        const FORMIDABLE = require('formidable');
        const DATA_HANDLER = require('./node/DataHandler.js');
        let formData = {};
        new FORMIDABLE.IncomingForm().parse(req).on('field', (field, name) => {
            formData[field] = name;
        }).on('error', (err) => {
            next(err);
        }).on('end', () => {
            new DATA_HANDLER().addData(formData);
        });
    }
}

module.exports = app;