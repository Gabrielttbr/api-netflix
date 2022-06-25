const mysql = require('../db')

exports.getFilme = async (req, res, next) => {
    try{
        const result = await mysql.queryMysql('select * from filme;');
        res.status(200).send({
            message: "Get all filme",
            respose: result
        })
    }catch(e){
        res.status(500).send({
            message: "Erro in serve", 
            response: e
        })
    }
} 

exports.getOne = async(req, res, next) => {
    
    try{
        const idExist = await mysql.queryMysql('select * from filme where id = ?', [req.params.id]);
        if(idExist.length < 1){
            return res.status(404).send({
                message: "Id not fould",
                response: idExist
            })
        }
        res.status(200).send({
            message: "Get one in filme",
            response: idExist
        })
    }catch(e){
        res.status(500).send({
            message: "Erro in serve", 
            response: e
        })
    }
}

exports.postFilme =  async (req, res, next) => {
    try{
        const result = await mysql.queryMysql('insert into filme (id, titulo, descricao, imagem) values (default,?,?,?);', [req.body.titulo, req.body.descricao, req.body.imagem]);
        res.status(200).send({
            message: " Film add with sucess",
            respose: result
        })
    }catch(e){
        res.status(500).send({
            message: "Erro in serve", 
            response: e
        })
    }
} 

exports.patchFilme = async(req, res, next) => {
    const idExist = await mysql.queryMysql('select * from filme where id = ?', [req.body.id]);
    if(idExist.length < 1){
        return res.status(404).send({
            message: "Id not fould",
            response: idExist
        })
    }
    try{
        const result = await mysql.queryMysql('update filme set titulo = ?, descricao = ?, imagem = ? where id = ?;', [req.body.titulo, req.body.descricao, req.body.imagem, req.body.id]);
        
        res.status(200).send({
            message: "Filme upgrade witch sucess",
            response: result
        })
    }catch(e){
        res.status(500).send({
            message: "Erro in serve", 
            response: e
        })
    }
} 

exports.deleteFilme = async(req,res,next) => {
    try{
        const idExist = await mysql.queryMysql('select * from filme where id = ?', [req.body.id]);
        if(idExist.length < 1){
            return res.status(404).send({
                message: "Id not fould",
                response: idExist
            })
        }
        const result = await mysql.queryMysql('delete from filme where id = ?;', [req.body.id]);
        res.status(200).send({
            message: "Filme delete witch sucess",
            response: result
        })
    }catch(e){
        res.status(500).send({
            message: "Erro in serve", 
            response: e
        })
    }
}

