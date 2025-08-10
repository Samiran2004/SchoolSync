import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile_image_url: {
        type: String,
        default: "https://blush.design/api/download?shareUri=eQEnemhs1&w=800&h=800&fm=png"
    },
    profile_image_public_key: {
        type: String
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

export default Teacher;