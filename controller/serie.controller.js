const QueryMysql = require("../db").queryMysql

exports.getAll = async(req, res, next) => {
    try {
        const response = await QueryMysql('select * from serie');
        res.status(200).send({
            message: "Get all series",
            response: response
        })
    } catch (error) {
        res.status(500).send({
            message: "Erro in serve",
            response: error
        })
    }
}
exports.getOne = async(req, res, next) => {
    try {
        const response = await QueryMysql('select * from serie where id = ?',[req.params.id]);
        if(response.length > 1){
            return res.status(200).send({
                message: "Get one serie",
                response: response
            })
        }
        res.status(404).send({
            message: "Not found",
            response: response
        })
    } catch (error) {
        res.status(500).send({
            message: "Erro in serve",
            response: error
        })
    }
}
exports.post = async(req,res,next) => {
    try {
        const response = await QueryMysql('insert into serie (id, title, descricao, imagem) values (default, ?, ?, ?)', [req.body.titulo, req.body.descricao, req.body.imagem])
        res.status(200).send({
            message: "Insert serie with sucess",
            response: response
        })
    } catch (error) {
        res.status(500).send({
            message: "Erro in serve",
            reponse: error
        })
    }
}
exports.patch = async(req,res,next) => {
    try {
        const id = await QueryMysql('select * from serie where id = ?',[req.params.id]);
        if(id.length > 1){
            const response = await QueryMysql('update table serie set title = ?, set descricao ?, set imagem = ?, where id = ?;', [req.body.titulo, req.body.descricao, req.body.imagem, req.body.id])
            return res.status(200).send({
                message: "Serie update with sucess",
                response: response
            })
        }
        res.status(404).send({
            message: "Not fould",
            respose: id
        })
    } catch (error) {
        res.status(500).send({
            message: "Erro in serve",
            response: error
        })
    }
}
exports.delete = async(req,res,next) => {
    try {
        const id = await QueryMysql('select * from serie where id = ?',[req.params.id]);
        if(id.length > 1){
            const response = await QueryMysql('delete from serie where id = ?', [req.params.id])
            return res.status(200).send({
                message: "Serie delete witch sucess",
                response: response
            })
        }
        res.status(404).send({
            message: "Not fould",
            response: id
        })

    } catch (error) {
        res.status(500).send({
            message: "erro in serve",
            response: error      
        })
    }
}