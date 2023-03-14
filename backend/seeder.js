import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from "colors";
import users from './data/products.js';
import User from './model/userModel.js'
import Order from './model/orderModel.js';
import connectDB from './config/db.js'
import Product from "./model/productModel.js";
import products from "./data/products.js";

dotenv.config();

connectDB();  //connect mongoDB


// if admil want to import all data :-
const importData = async () => {
    try {
        await Order.deleteMany();  // it return promise so we use await
        await Product.deleteMany();
        await User.deleteMany()

        const createUser = await User.insertMany(users)

        const adminUser = createUser[0]._id

        const sampleProducts = products.map(product =>{
            return {...product,user:adminUser}
        })
        await Product.insertMany(sampleProducts)

        console.log('Data Imported !'.green.inverse)
        
        process.exit(1)
    } catch (err) {

        console.error(err)
        
        process.exit(1)
    }
}

//The process.exit() method is used to end the process which is 
// running at the same time with an exit code in NodeJS.
//1 means end the process with some failure.

//if admin want to destroy all data 
const destroyData = async () => {
    try {
        await Order.deleteMany();  // it return promise so we use await
        await Product.deleteMany();
        await User.deleteMany()

        console.log('Data Destroyed !'.red.inverse)
        
        process.exit(1)
    } catch (error) {

        console.error(`${error}`.red.inverse)
        
        process.exit(1)
    }
}


if(process.argv[2] === '-d') {
    destroyData()
}else {
    importData()
}