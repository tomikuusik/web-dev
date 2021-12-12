const {Client} = require('pg');

const client = new Client({
    user: "postgres",
    password: "Froodo123",
    database: "postgres",
    host: "localhost",
    port: "5432"
});
module.exports = client;
