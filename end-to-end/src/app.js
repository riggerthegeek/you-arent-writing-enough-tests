/**
 * app
 */

/* Node modules */

/* Third-party modules */
const bodyParser = require('body-parser');
const express = require('express');
const { MongoClient } = require('mongodb');

/* Files */
const config = require('./config.json');

const app = express();

app.use(bodyParser.json());

app.get('/user/:username/:password', (req, res) => {

    MongoClient.connect(config.mongodb.url)
        .then(db => db
            .collection('user')
            .findOne(req.params)
        ).then(result => {
            if (result) {
                res.send(result)
            } else {
                res.status(404)
                    .end();
            }
        });

});

app.post('/user', (req, res) => {

    const body = req.body || {};

    const err = new Error('Invalid');

    const required = [
        'username',
        'emailAddress',
        'password'
    ];

    err.errors = required.reduce((result, key) => {
        if (!body[key]) {
            result.push(key);
        }
        return result;
    }, []);

    if (err.errors.length > 0) {
        return res.status(400)
            .send(`Missing params: ${err.errors.join(', ')}`);
    }

    body.created = new Date();

    MongoClient.connect(config.mongodb.url)
        .then(db => {
            return db.collection('user')
                .insert(body)
                .then(() => db.collection('user').findOne({
                    username: body.username
                }));
        })
        .then(result => res.send(result));

});

app.listen(9999, () => console.log('Listening on 9999'));

module.exports = app;