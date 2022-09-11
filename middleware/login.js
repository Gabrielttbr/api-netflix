const jwt = require('jsonwebtoken');
const env = require('dotenv').config()

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.usuario = decode;
        next();
    }catch(e){
        res.status(401).send({
            message: "Authentication failure"
        })
    }
}