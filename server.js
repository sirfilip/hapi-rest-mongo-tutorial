'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');

// create server with host and port
const server = new Hapi.Server();
server.connection({
    port: 3000
});

// connect to db
server.app.db = mongojs('hapi-rest-mongo');

server.register([
    require('./routes/books')
], (err) => {

    if (err) {
        throw err;
    }

    server.start((err) => {
        if (err) {
            throw err;
        } 
        console.log('Server running at:', server.info.uri);
    });
});
