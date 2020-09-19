const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        if(!req.headers.authorization){
            next();
            return
        }
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, 'secret')
        const userId = decodedToken.userId
        if (req.body.userId && req.body.userId !== userId){
            throw 'ID de l utilisateur invalide !'
        }else {
            next()
        }
    } catch (error) {
        res.status(401).json({ error: error |'Requete invalide!'})
        }
};