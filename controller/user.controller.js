const conectionDatabse = require('../db');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');
const { json } = require('body-parser');

exports.registerUsuario = async (req, res, next) => {
    bcrypt.hash(req.body.senha, 10, async (erro, hash) => {
        if (erro) {
            return res.status(500).send({
                error: erro
            })
        } else {
            const result = await conectionDatabse.queryMysql('select email from usuario where email = ?;', req.body.email)
            if(result.length>0){
               return res.status(409).send({
                    message: "Email já cadastrado",
                })
            }else{      
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
        }
    })
}
exports.loginUsuario = async (req, res, next) => {
    try {
        const result = await conectionDatabse.queryMysql('select * from usuario where email = ?;', req.body.email)
        if (result < 1) {
            return res.status(401).send({ message: "Email não encontrado!" });
        } else {
            return bcrypt.compare(req.body.senha, result[0].senha, (err, results) => {
                if (err) {
                    return res.status(401).send({
                        erro: err
                    })
                }
                if (results) {
                    const token = jsonWebToken.sign({
                        id_usuario: result[0].id_usuario,
                        email: result[0].email
                    }, process.env.JWT_KEY, {
                        expiresIn: '1h'
                    })
                    return res.status(200).send({
                        message: "Usuário logado com sucesso!",
                        token: token
                    })
                }
                return res.status(401).send({
                    message: "Falha na autentificação"
                })
            })

        }
    } catch (e) {
        return res.status(500).send({
            erro: e
        })
    }
}


























