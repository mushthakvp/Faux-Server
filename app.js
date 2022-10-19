const db = require("./connection/dbConnection")
const express = require("express")
const app = express()
const accountRoutes = require("./routes/accountRoutes")
const productRoutes = require("./routes/productRoutes")
const cors = require("cors")
const morgan = require("morgan")
const colors = require('colors')
const bodyParser = require("body-parser");
const fetchRoutes = require("./routes/fetchRoutes")

// db connect

db()

// local host

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000
app.listen(port,hostname , () => console.log(`server starting http://${hostname}:${port}/`.yellow))


//json converter

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// call 

app.use("/account", accountRoutes)

app.use("/vendor", productRoutes)

app.use("/user" , fetchRoutes)