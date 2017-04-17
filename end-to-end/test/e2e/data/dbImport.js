/**
 * DB Import
 *
 * Imports the databases for the integration
 * tests.
 */

/* Node modules */
const fs = require('fs');
const path = require('path');

/* Third-party modules */
const async = require('async');
const mongodb = require('mongodb').MongoClient;

/* Files */
const config = require('../../../src/config');

const tasks = {
    clear: [],
    insert: []
};

const databases = [
    'mongodb'
];

const connections = {
    mongodb: {
        init: cb => {
            mongodb.connect(config.mongodb.url, cb);
        },
        clear: (collection, cb) => {

            connections.mongodb.init((err, db) => {

                if (err) {
                    cb(err);
                    return;
                }

                db.dropCollection(collection, err => {

                    /* ns not found means collection didn't exist */
                    if (err && err.message !== 'ns not found') {
                        cb(err);
                        return;
                    }

                    db.close();

                    cb(null);

                });

            });

        },
        insert: (collection, data, cb) => {

            connections.mongodb.init((err, db) => {

                if (err) {
                    cb(err);
                    return;
                }

                db.collection(collection)
                    .insertMany(data, (err, result) => {

                        if (err) {
                            cb(err);
                            return;
                        }

                        db.close();

                        cb(null, result);

                    });

            });

        }
    }
};

/* Get the files to load */
databases.forEach(db => {

    const folderPath = path.join(__dirname, db);

    /* Get the data files */
    let files = [];
    try {
        files = fs.readdirSync(folderPath);
    } catch (err) {
        /* No files to load */
    }

    console.log(files);

    files.forEach(file => {

        const content = require(path.join(folderPath, file));

        const table = file
            .replace(/(\.\w+)$/, '')
            .replace(/^((\d+)\s-\s)/, '');

        /* Delete the information from the table */
        tasks.clear.push(cb => {
            console.log(`Clearing ${table}`);
            connections[db].clear(table, cb);
        });

        /* Insert the data */
        tasks.insert.push(cb => {
            console.log(`Inserting ${table}`);
            connections[db].insert(table, content, cb);
        });

    });

});

/* Run the tasks */
const series = []
    .concat(tasks.clear)
    .concat(tasks.insert);

async.series(series, (err, results) => {

    if (err) {
        throw err;
    }

    console.log(results);

    process.exit(0);

});
