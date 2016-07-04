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
            PORT = process.env.PORT || 8080,
            SERVER = HTTP.createServer(function (req, res) {
                let httpHandler = function (err, str, contentType) {
                    if (err) {
                        res.writeHead(500, {'Content-Type': 'text/plain'});
                        res.end('An error has occurred: ' + err.message);
                    } else if (contentType.indexOf('image') >= 0) {
                        res.writeHead(200, {'Content-Type': contentType});
                        res.end(str, 'binary');
                    } else {
                        res.writeHead(200, {'Content-Type': contentType});
                        res.end(str);
                    }
                };

                if (req.method == 'POST') {
                    if (req.headers['x-requested-with'] === 'formWriteRequest') {
                        app.writeFormData(req, res);
                    } else if (req.headers['x-requested-with'] === 'getThankYouPageRequest') {
                        app.getThankYouPage(res);
                    }
                } else if (req.url.indexOf('/data/') >= 0) {
                    app.render(req.url.slice(1), 'text/csv', httpHandler, 'utf-8');
                } else if (req.url.indexOf('/javascripts/') >= 0) {
                    app.render(req.url.slice(1), 'application/ecmascript', httpHandler, 'utf-8');
                } else if (req.url.indexOf('/css/') >= 0) {
                    app.render(req.url.slice(1), 'text/css', httpHandler, 'utf-8');
                } else if (req.url.indexOf('/img/') >= 0) {
                    app.render(req.url.slice(1), 'image/jpeg', httpHandler, 'binary');
                } else {
                    app.render('public/views/index.html', 'text/html', httpHandler, 'utf-8');
                }
            }).listen(PORT, function () {
                console.log('Caught ' + PORT + ' out of 151');
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

    static getThankYouPage(res) {
        const fs = require('fs');
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end(fs.readFileSync(__dirname + '/public/views/thank-you.html', 'utf-8'));
    }
}

module.exports = app;