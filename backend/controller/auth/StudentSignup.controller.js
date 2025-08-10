import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import Models from '../../model/index.model.js';
import bcrypt from 'bcryptjs';
import MailTemplates from '../../Template/index.template.js';
import sendMail from '../../service/mailer.service.js';
import cloudinary from '../../service/cloudinary.service.js'
import fs from 'fs';

const studentSignUp = async (req, res) => {
    try {


        // Fetch data from req.body...
        const {
            first_name, last_name, email, phone_number, password, gender,
            vill, post, pin, dist, state,
            father_first_name, father_last_name, father_email, father_phone_number,
            mother_first_name, mother_last_name, mother_email, mother_phone_number
        } = req.body;

        // check required fields values are present or not...
        if (!first_name || !last_name || !email || !phone_number || !password || !gender
            || !post || !pin || !dist || !state
            || !father_first_name || !father_last_name || !father_email || !father_phone_number
            || !mother_first_name || !mother_last_name || !mother_email || !mother_phone_number
        ) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'Failed',
                message: ReasonPhrases.BAD_REQUEST
            });
        }

        // Check numeric values...
        // const fieldsToValidateIsNum = {
        //     phone_number, father_phone_number, mother_phone_number, pin
        // }

        // for (const [fieldName, fieldValue] of Object.entries(fieldsToValidateIsNum)) {
        //     if (!checkIsValidInteger(fieldValue)) {
        //         return res.status(StatusCodes.BAD_REQUEST).json({
        //             status: 'Failed',
        //             message: ReasonPhrases.BAD_REQUEST,
        //             error: "Invalid datatype, Must be a valid integer..."
        //         });
        //     }
        // }

        // Check Student id already exist or not...
        const isStudent = await Models.StudentModel.findOne({ email: email });

        if (isStudent) {
            return res.status(StatusCodes.CONFLICT).json({
                status: 'Failed',
                message: ReasonPhrases.CONFLICT,
                error: "Student already exists..."
            });
        }

        // Check father is already exist in database or not...
        let fatherId = "";
        const isExistFather = await Models.FatherModel.findOne({
            first_name: father_first_name,
            last_name: father_last_name,
            email: father_email,
            phone_number: father_phone_number
        });

        // Save father's details..
        if (!isExistFather) {
            const fatherData = await Models.FatherModel.create({
                first_name: father_first_name,
                last_name: father_last_name,
                email: father_email,
                phone_number: father_phone_number
            });

            fatherId = fatherData._id;
        } else {
            fatherId = isExistFather._id;
        }

        // Check mother is already exist in database or not...
        let motherId = "";

        const isExistMother = await Models.MotherModel.findOne({
            first_name: mother_first_name,
            last_name: mother_last_name,
            email: mother_email,
            phone_number: mother_phone_number
        });

        // Save mother's details...
        if (!isExistMother) {
            const motherData = await Models.MotherModel.create({
                first_name: mother_first_name,
                last_name: mother_last_name,
                email: mother_email,
                phone_number: mother_phone_number
            });

            motherId = motherData._id;
        } else {
            motherId = isExistMother._id;
        }

        // Save address details...
        const addressData = await Models.AddressModel.create({
            vill: vill,
            post: post,
            pin: pin,
            dist: dist,
            state: state
        });

        // Hash the default password...
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create username...
        const username = await generateUsername(first_name);

        // Upload profile image...
        let profileImageUrl = "";
        let profileImagePublicKey = "";
        if (req.file) {
            const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
                folder: "students_profile_photos"
            });
            fs.unlinkSync(req.file.path);
            profileImageUrl = uploadResponse.secure_url;
            profileImagePublicKey = uploadResponse.public_id;
        }

        const studentData = await Models.StudentModel.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number,
            password: hashedPassword,
            gender: gender,
            fatherId: fatherId,
            motherId: motherId,
            addressId: addressData._id,
            username: username,
            profile_image_url: profileImageUrl,
            profile_image_public_key: profileImagePublicKey
        });

        // Send a success mail...
        const emailData = MailTemplates.StudentSignupMailTemplate({
            email: email,
            name: first_name,
            subject: "Welcome to SchoolSync"
        });

        await sendMail(emailData, (error, info) => {
            if (error) {
                console.log("Mail sending error: ", error);
            } else {
                console.log("Mail sent: ", info);
            }
        });


        // Send mail if father mail address is not same as student's mail address...
        if (father_email !== null && father_email !== undefined && email !== father_email) {
            const emailData = MailTemplates.FatherSignupMailTemplate({
                email: father_email,
                name: father_first_name + " " + father_last_name,
                subject: "Welcome to SchoolSync"
            });

            await sendMail(emailData, (error, info) => {
                if (error) {
                    console.log("Mail sending error: ", error);
                } else {
                    console.log("Mail sent: ", info);
                }
            });
        }

        // Send mail if mother's mail address is not same as student and father's mail address...
        if (mother_email && mother_email !== father_email && mother_email !== email) {
            const emailData = MailTemplates.MotherSignupMailTemplate({
                name: mother_first_name + " " + mother_last_name,
                email: mother_email,
                subject: "Welcome to SchoolSync"
            });

            await sendMail(emailData, (error, info) => {
                if (error) {
                    console.log("Mail sending error: ", error);
                } else {
                    console.log("Mail sent: ", info);
                }
            });
        }

        return res.status(StatusCodes.CREATED).json({
            status: 'Ok',
            message: ReasonPhrases.CREATED,
            data: {
                studentId: studentData._id,
                username: studentData.username
            }
        });


    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'Failed',
            message: ReasonPhrases.INTERNAL_SERVER_ERROR
        });
    }
}

const checkIsValidInteger = (value) => {
    return Number.isInteger(Number(value) && !isNaN(value));
}

async function generateUsername(name) {
    const randomNum = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    const userName = name + randomNum;

    const isUserNameExist = await Models.StudentModel.findOne({ username: userName });

    if (!isUserNameExist) {
        return userName;
    }

    return generateUsername(name);
}

export default studentSignUp;