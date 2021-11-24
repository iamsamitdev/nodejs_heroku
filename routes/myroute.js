// Import Express
const express = require('express')
const router = express.Router()

// Import mssql_dbconfig
const dbConnMySQL = require('../config/mysql_dbconnect')

// เรียกใช้งาน Moment เพื่อจัดรูปแบบวันที่
const moment = require('moment')

// สร้างฟังก์ชันแปลงยอดเงินให้เป็นรูปแบบสกุลเงิน (10,000.50)
const formatPrice = (value) => {
    let val = (value/1).toFixed(2).replace(',', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// สร้างชุดตัวแปรเก็บหมวดหมู่สินค้า
const category = ["","Mobile", "Tablet", "Smart Watch","Labtop"]

// List Product from MySQL
router.get('',(req, res)=>{
    let sql = "SELECT * FROM products"
    dbConnMySQL.query(sql, (err, rows)=>{
        if(err){
            res.send(err)
        }else{
            // res.json(rows)
            res.render(
                'pages/index', 
                { 
                    title: 'MySQL Products', 
                    heading: 'MySQL Products',
                    data: rows,
                    category: category,
                    moment: moment,
                    formatPrice: formatPrice
                }
            )
        }
    })
})

module.exports = router
