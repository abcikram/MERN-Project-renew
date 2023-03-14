import express from "express";
const router = express.Router();
import asyncHandler from "express-async-handler";
import Product from '../model/productModel.js'

//des fetch all products
//route  GET  /api/products
//acess  GET  public

router.get('/',asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
   })
)


//des fetch single product
//route  GET  /api/products
//acess  GET  public

router.get('/:id',asyncHandler (async (req, res) => {
    const selectProduct = await Product.findById(req.params.id)

    if (selectProduct) {
        res.send(selectProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
  })
)

export default router