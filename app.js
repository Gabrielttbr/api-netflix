const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// Routers
const routerUser = require('./router/user.router');
const routerFilme = require('./router/filme.router');
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    app.use(cors());
    next();
})
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })) // ACEITA APENAS DADOS SIMPLES
app.use(bodyParser.json())// JSON DE ENTRADA BODY_PARSER
app.use('/user', routerUser);
app.use('/filme', routerFilme)
app.use((req,res,next) =>{
    res.status(404).send({
        message: "NOT FOUT"
    })
})





module.exports = app;

