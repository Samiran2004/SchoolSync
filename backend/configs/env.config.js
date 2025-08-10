import dotenv from 'dotenv';

dotenv.config();

const envConfigs = {
    PORT: process.env.PORT,
    DATABASE_URI: process.env.DB_URI,
    MAIL_ADDRESS: process.env.MAIL_ADDRESS,
    MAIL_APP_PASSWORD: process.env.MAIL_PASSWORD
}

export default envConfigs;