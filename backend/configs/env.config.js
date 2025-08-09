import dotenv from 'dotenv';

dotenv.config();

const envConfigs = {
    PORT: process.env.PORT,
    DATABASE_URI: process.env.DB_URI
}

export default envConfigs;