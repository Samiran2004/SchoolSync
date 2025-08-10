import { ReasonPhrases, StatusCodes } from "http-status-codes";
import Models from "../../model/index.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../../service/cloudinary.service.js";
import MailTemplates from "../../Template/index.template.js";
import sendMail from "../../service/mailer.service.js";

const TeacherSignUpController = async (req, res) => {
    try {
        // get data from request body...
        const {
            first_name, last_name, email, phone_number, password, gender,
            vill, post, pin, dist, state
        } = req.body;

        // Check all required fields are present in request body or not...
        if (!first_name || !last_name || !email || !phone_number || !password || !gender
            || !post || !pin || !dist || !state
        ) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'Failed',
                message: ReasonPhrases.BAD_REQUEST
            });
        }

        // Check teacher is already exist or not...
        const isTeacherExist = await Models.TeacherModel.findOne({
            $or: [
                { email: email },
                { phone_number: phone_number }
            ]
        });

        // Return if the teacher is already exist...
        if (isTeacherExist) {
            return res.status(StatusCodes.CONFLICT).json({
                status: 'Failed',
                message: ReasonPhrases.CONFLICT,
                error: "Teacher already exist!"
            });
        }

        // Check if address is already exist or not, if exist then use the id as addressId
        let addressId = "";

        const isAddressExist = await Models.AddressModel.findOne({
            vill: vill,
            post: post,
            pin: pin,
            dist: dist,
            state: state
        });

        if (!isAddressExist) {
            const newAddress = await Models.AddressModel.create({
                vill: vill,
                post: post,
                pin: pin,
                dist: dist,
                state: state
            });

            addressId = newAddress._id;
        } else {
            addressId = isAddressExist._id;
        }

        // Hash the password...
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Upload the profile image if exist...
        let profileImageUrl = "";
        let profileImagePublicKey = "";
        if (req.file) {
            const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
                folder: "teachers_profile_photos"
            });

            profileImageUrl = uploadResponse.secure_url;
            profileImagePublicKey = uploadResponse.public_id;
        }

        // Generate username....
        const username = await generateUsername(first_name);

        // Save the teacher's details...
        const teacher = await Models.TeacherModel.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number,
            password: hashedPassword,
            gender: gender,
            profile_image_url: profileImageUrl,
            profile_image_public_key: profileImagePublicKey,
            addressId: addressId,
            username: username
        });

        // Send a success mail...
        const emailData = MailTemplates.TeacherSignupMailTemplate({
            email: email,
            name: first_name + " " + last_name,
            subject: "Welcome to SchoolSync"
        });

        await sendMail(emailData, (error, info) => {
            if (error) {
                console.log("Mail sending error: ", error);
            } else {
                console.log("Mail sent: ", info);
            }
        });

        // Send a response...
        return res.status(StatusCodes.CREATED).json({
            status: 'Ok',
            message: ReasonPhrases.CREATED,
            data: {
                teacherId: teacher._id,
                username: teacher.username
            }
        });


    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'Failed',
            message: ReasonPhrases.INTERNAL_SERVER_ERROR
        });
    }
}

async function generateUsername(name) {
    const randomNum = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    const userName = name + randomNum;

    const isUserNameExist = await Models.TeacherModel.findOne({ username: userName });

    if (!isUserNameExist) {
        return userName;
    }

    return generateUsername(name);
}

export default TeacherSignUpController;