import { v2 } from 'cloudinary';
import envConfigs from '../configs/env.config.js';

v2.config({
    cloud_name: envConfigs.CLOUD_NAME,
    api_key: envConfigs.CLOUD_API_KEY,
    api_secret: envConfigs.CLOUD_API_SECRET
});

export default v2;