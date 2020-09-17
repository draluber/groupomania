const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connect = require('./connexion');

const userRoutes = require('./routes/user');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);


app.get("/don",(req, res)=>{
    connect.query('SELECT * FROM `users` ', function (error, results, fields) {
       res.send(results[0].pseudo);
       
      });
});


module.exports = app;