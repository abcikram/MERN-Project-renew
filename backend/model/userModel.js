import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
     
    },
    password: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User