import express from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import Colors from 'colors'  //color  is user for coloring (npm i color)
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB() // connecte with mongoDB 

const app = express();


app.get('/', (req, res) => {
    res.send("API is running...")
})

app.use('/api/products',productRoutes)  // we are create global middleware so that productRoutes.js we 
//do not use "/api/products" , simple use '/' and '/:id'

app.use((req,res,next) =>{
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

//error handling :-
app.use((err,req,res,next) =>{                        // global middleware
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
     res.status(statusCode)
     res.send({message:err.message,
     stack : process.env.NODE_ENV == 'production'? null :err.stack})
 })

const PORT = process.env.PORT || 5000

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)