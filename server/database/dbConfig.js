const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'brskly',
    'root',
    '12345',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
);
//Checking connection status
sequelize.authenticate()
    .then(function () {
        console.log('Connection has been established successfully');
    })
    .catch(function (err) {
        console.log('There is connection in ERROR');
    })
module.exports = sequelize;
