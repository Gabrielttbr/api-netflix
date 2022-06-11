const express = require('express');
const morgan = require('morgan');
const app = express();

// Routers
const routerUser = require('./router/user.router')

app.use(morgan('dev'))
app.use('/user', routerUser)
app.use((req,res,next) =>{
    res.status(404).send({
        message: "NOT FOUT"
    })
})





module.exports = app;

