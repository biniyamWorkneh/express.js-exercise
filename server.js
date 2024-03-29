const express = require("express")
const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'})

const app = express()
const PORT = process.env.PORT || 5500

app.listen(PORT, console.log(`the port runs on ${PORT}`))