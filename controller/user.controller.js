const conectionDatabse = require('../db');
const bcrypt = require('bcrypt');

exports.registerUsuario = async (req, res, next) => {
    bcrypt.hash(req.body.senha, 10, (erro, hash) => {
        if (erro) {
            return res.status(500).send({
                error: erro
            })
        } else {
            conectionDatabse.queryMysql('insert into usuario (id_usuario, nome, email, senha, cpf, cep, endereco) values (default, ?,?,?,?,?,?);',
                [req.body.nome, req.body.email, hash, req.body.cpf, req.body.cep, req.body.endereco])
                .then((result) => {
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
    })
}




exports.loginUsuario = (req, res, next) => {
    res.status(200).send({
        message: "Welcome login user"
    })
}