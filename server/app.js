const express = require("express")
const app = express()
require('dotenv').config()
var PORT = process.env.PORT
var HOST = process.env.HOST
const homeRouter = require("./routers/homeRouter")

app.use(express.json())

app.use('/', homeRouter)



app.listen(PORT, HOST, () => {
  console.log(`server started in port: ${PORT}`)
})
