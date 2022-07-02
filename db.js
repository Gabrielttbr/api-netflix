const mysql2 = require('mysql2');

exports.conection = mysql2.createPool({   
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

exports.queryMysql = (query, param=[]) => {
    return new Promise((resolve, reject) => {
        // Visualizando a conxeção
        this.conection.getConnection((error, con) => {
            if(error){
                return reject(error)
            } 
            // liberando a conxeção
            con.release();
            this.conection.query(query, param, (error, result) => {
                if(error){
                    return reject(error);
                }
                else {
                    return resolve(result);
                }
            })
        })
    })
}







