const mysql2 = require('mysql2');
const enve = require('dotenv').config()
exports.conection = mysql2.createPool({   
    host: process.env.HOST,
    user: process.env.USER_DATABASE,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
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







