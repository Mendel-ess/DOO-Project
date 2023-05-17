const Sequelize = require('sequelize');

const sq = new Sequelize('postgres', 'postgres', '00000', {
    host: 'localhost',
    dialect: 'postgres',
    port: '8083'
});


module.exports = sq;