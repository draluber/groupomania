const { Sequelize } = require("sequelize/types");
const { sequelize } = require("../config/db.config");

module.exports = (sequelize, Sequelize) =>{
    const utilisateur = sequelize.define('utilisateur',{
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
    });
    return utilisateur;
}