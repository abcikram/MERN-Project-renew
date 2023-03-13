import mongoose from 'mongoose'

const ObjectId = mongoose.Types.ObjectId;

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },

}, { timestamp: true })

const productSchema = mongoose.Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    review: [reviewSchema],
    rating: {
        type: Number,
        require: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        require: true,
        default: 0,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0,
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product