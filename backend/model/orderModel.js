import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = mongoose.Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    OrderItems: [{
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            require: true
        },
        image: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        product: {
            type: ObjectId,
            ref: 'Product',
            required: true,
        },
    }],
    ShippingAddress: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        postalCode: {
            type: Number,
            required: true,
        },
        Country: {
            type: String,
            required: true,
        },
    },
    payrmentMethd: {
        type: String,
        required: true,
    },
    paymentResult: {
        id: {
            type: String,
            require: true,
        },
        status: {
            type: String,
            required: true,
        },
        update_time: {
            type: String,
            required: true,
        },
        email_address: {
            type: String,
            required: true,
        },
    },
    taxPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        require: true,
        default: false
    },
    PaidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        require: true,
        default: false
    },
    deliveredAt: {
        type: Date,
    },
}, {
    timestamps: true
})

const Order = mongoose.model('Order',orderSchema)

export default Order