const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var mysql = require('mysql');
const {validationResult} = require('express-validator');
const connect = require('../connexion');

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
         return res.status(422).jsonp(errors.array());
    }else {
  bcrypt.hash(req.body.password, 10, function(err,hash){
         var sql = "INSERT INTO users (email,password) VALUES ("+email+","+hash+")";
         connect.query(sql, function(err, result){
             if (err){
                 throw err;
             }else{
                 res.status(200).json({id: result.insertId});
             }
         })
         });
    }    };

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
       .then(user => {
           if (!user) {
               return res.status(401).json({ error: 'utilisateur non trouvé !'})
           }
           bcrypt.compare(req.body.password, user.password)
           .then(valid => {
               if (!valid){
                   return res.status(401).json({ error: 'mot de passe incorrect !'})
               }
               res.status(200).json({
                   userId: user._id,
                   token: jwt.sign(
                       { userId: user._id },
                       'secret',
                       { expiresIn: '24h' }
                   ),
               })
           })
           .catch(error => res.status(500).json({ error }))
       })
       .catch(error => res.status(500).json({ error }))
}