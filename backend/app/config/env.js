const env={
    database: 'groupomania',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }
};
module.exports =env;