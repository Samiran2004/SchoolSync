import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    vill: {
        type: String,
    },
    post: {
        type: String
    },
    pin: {
        type: Number,
        required: true
    },
    dist: {
        type: String
    },
    state: {
        type: String
    }
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

export default Address;