const mysql = require('mysql');

var mysqlConnexion = mysql.createConnection ({
    host: 'localhost',
    user: 'root' ,
    password:'',
    database: 'groupomania',
    port: 3306,
    multipleStatements: true
})

mysqlConnexion.connect((err) => {
    if(!err){
        console.log("connecté à la base de données !")
    }
    else {
        console.log('Erreur de connexion à la base de données !')
    }
})

module.exports = mysqlConnexion;
