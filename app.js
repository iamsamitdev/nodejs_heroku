const express = require('express')
const wakeDyno = require('woke-dyno')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')

// Import myroute.js
const myroute = require('./routes/myroute')

// กำหนด Folder สำหรับบอกตัว express ว่าไฟล์ css , images อยู่ path ไหน
app.use(express.static(path.join(__dirname, 'assets')))

// View Engine
app.set('view engine', 'ejs')

// เรียกใช้งาน Routes
app.use('/', myroute)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
    wakeDyno('https://sample-nodejs-heroku.herokuapp.com').start()
})