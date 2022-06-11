const conectionDatabse = require('../db')

exports.registerUsuario = (req, res, next) => {
    conectionDatabse.queryMysql('select * from testse').then((result) => {
        res.status(200).send({
            message: result
        })
    }).catch((e) => {
        res.status(500).send({
            erro: e
        }
        )
    })
}

exports.loginUsuario = (req, res, next) => {
    res.status(200).send({
        message: "Welcome login user"
    })
}