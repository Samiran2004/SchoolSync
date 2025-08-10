import dotenv from 'dotenv';

dotenv.config();

const envConfigs = {
    PORT: process.env.PORT,
    DATABASE_URI: process.env.DB_URI,
    MAIL_ADDRESS: process.env.MAIL_ADDRESS,
    MAIL_APP_PASSWORD: process.env.MAIL_PASSWORD,
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUD_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUD_API_SECRET: process.env.CLOUDINARY_API_SECRET
}

export default envConfigs;