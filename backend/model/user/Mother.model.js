import mongoose from "mongoose";

const motherSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
    }
}, { timestamps: true });

const Mother = mongoose.model('Mother', motherSchema);

export default Mother;