const { Client } = require('pg');

const connectData = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '00000',
    port: '8083'
}

const client = new Client(connectData);

module.exports = client;

