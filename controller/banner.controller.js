const mysql = require('../db');

exports.post = async(req, res, next) => {
    try {
        const result = await mysql.queryMysql('insert into banner values (default, ?,?,?,?);', 
        [req.body.titulo, req.body.descricao,  req.body.imagem, req.body.status]);
        res.status(200).send({
            message: "Banner insert into sucess",
            response: result
        })
    } catch (e) { 
        res.status(500).send({
            message: "Erro in serve",
            response: e
        })
    }
} 
exports.getAll = async(req, res, next) => {
    try {
        const result = await mysql.queryMysql('select * from banner;')
        res.status(200).send({
            message: "Get all banner",
            response: result
        })
    } catch (e) { 
        res.status(500).send({
            message: "Erro in serve",
            response: e
        })
    }
} 
exports.getOne = async(req,res, next) => {
    try {
        const result = await mysql.queryMysql('select * from banner where id = ?', [req.params.id]);
        if (result.length < 1){
            res.status(404).send({
                message: "Not fould",
                response: result
            })
        }
        res.status(200).send({
            message: "Get one banner",
            response: result
        })
    } catch (e) { 
        res.status(500).send({
            message: "Erro in serve",
            response: e
        })
    }
}
exports.delete = async(req,res, next) => {
    try {
        const result = await mysql.queryMysql('select * from banner where id = ?', [req.body.id]);
        if (result.length < 1){
            res.status(404).send({
                message: "Not fould",
                response: result
            })
        }
        const RegisterDelete = await mysql.queryMysql('delete from banner where id = ?;', [req.body.id])
        res.status(200).send({
            message: "Delete register with sucess",
            response: RegisterDelete
        })
    } catch (e) { 
        res.status(500).send({
            message: "Erro in serve",
            response: e
        })
    }
}
exports.patch = async(req, res, next) => {
    try {
        const id = await mysql.queryMysql('select * from banner where id = ?', [req.body.id]);
        if (id.length < 1){
            res.status(404).send({
                message: "Not fould id",
                response: id
            })
        }
        const result = await mysql.queryMysql('update banner set titulo = ?, descricao = ?, status = ?, imagem = ? where id = ?; ', 
        [req.body.titulo, req.body.descricao, req.body.status, req.body.imagem, req.body.id]);
        res.status(200).send({
            message: "Banner insert with sucess",
            response: result
        })
       
    } catch (e) { 
        res.status(500).send({
            message: "Erro in serve",
            response: e
        })
    }
}