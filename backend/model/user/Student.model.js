import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile_image_url: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/previews/007/469/004/non_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg"
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    fatherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Father'
    },
    motherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mother'
    },
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

export default Student;