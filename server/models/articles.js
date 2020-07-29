// Include Sequelize module. 
const Sequelize = require('sequelize');
// Database connection pool managed by Sequelize. 
const sequelize = require('../database/dbConfig');

const Article = sequelize.define('article', {
    article_id:{ 
        type:Sequelize.INTEGER, 
        autoIncrement:true, 
        allowNull:false, 
        primaryKey:true
    }, 
    description: { type: Sequelize.STRING, allowNull:false },
    image: {type: Sequelize.BLOB('long'), allowNull:false}
});
 sequelize.sync()
 .then(() => {
    console.log('New table created');
 })
 .catch(() => {
    console.log('Error');
 });
//Applying Item Table to database
module.exports = Article;