const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB, MYSQL_PORT } = require('../config')

// Import mysql
const mysql = require('mysql')


// const connection = mysql.createConnection({
//     host     : MYSQL_HOST,
//     user     : MYSQL_USER,
//     password : MYSQL_PASS,
//     database : MYSQL_DB
//     // port: MYSQL_PORT
// })

const connection = mysql.createPool({
    host     : MYSQL_HOST,
    user     : MYSQL_USER,
    password : MYSQL_PASS,
    database : MYSQL_DB,
    port: MYSQL_PORT
})

// connection.connect((error)=>{
//     if(!!error){
//         console.log(error)
//     }else{
//         console.log('MySQL Database Connected Successfully')
//     }
// })

connection.getConnection((error, connection)=>{
    if(!!error){
        connection.release()
        throw err
    }else{
        console.log('MySQL Database Connected Successfully')
    }
})

module.exports = connection