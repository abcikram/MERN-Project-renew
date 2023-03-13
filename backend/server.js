import express from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import products from './data/products.js'
import Colors from 'colors'  //color  is user for coloring (npm i color)

dotenv.config()

connectDB() // connecte with mongoDB 

const app = express();

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.get('/api/products', (req, res) => {
    res.send(products)
})

app.get('/api/products/:id', (req, res) => {
    const selectProduct = products.find((p) => p._id === req.params.id)
    res.send(selectProduct)
})

const PORT = process.env.PORT || 5000

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)