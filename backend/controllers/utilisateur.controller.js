const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var mysql = require('mysql');
const { validationResult } = require('express-validator');
//const connect = require('../connexion');
const db = require('../config/db.config.js');
const Utilisateur = db.utilisateurs;

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
    } else {
            Utilisateur.create({
                email : req.body.email,
                password : req.body.password
            }).then(utilisateur => {
                res.send(utilisateur);
            }).catch(err => {
                res.status(500).send("Error -> "+ err);
            })
        };
    };
 

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'utilisateur non trouvé !' })
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'mot de passe incorrect !' })
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