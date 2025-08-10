import mongoose from "mongoose";

const fatherSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
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
        required: true
    }
}, {
    timestamps: true
});

const Father = mongoose.model('Father', fatherSchema);

export default Father;