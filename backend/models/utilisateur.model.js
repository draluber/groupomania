const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");

module.exports = (sequelize, Sequelize) =>{
    const utilisateur = sequelize.define('utilisateur',{
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        pseudo: {
            type: Sequelize.STRING
        },
        niveau: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        },
        AVATAR: {
            type: Sequelize.STRING
        },
    });
    return utilisateur;
}