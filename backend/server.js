import express from 'express'
import envConfigs from './configs/env.config.js';
import connectDB from './utils/connectDB.js';
import figlet from 'figlet';
import Router from './router/index.router.js';
import cors from 'cors';

const app = express();

app.use(cors());

// Connect database...
connectDB(envConfigs.DATABASE_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    return res.status(200).json({
        status: 'Ok',
        message: "Server is up and running..."
    });
});

app.use('/api/v1', Router.v1);

// Start the server...
app.listen(envConfigs.PORT, (err) => {
    if (err) {
        figlet("S e r v e r  C o n n e c t i o n g  E r r o r . . .", (err, data) => {
            if (err) {
                console.log("Figlet error...");
                return;
            }
            console.log(data);
        })
    } else {
        console.log("Server running on port 8000");
        figlet(`Server connected on port: ${envConfigs.PORT}`, (err, data) => {
            if (err) {
                console.log("Figlet error...");
                return;
            }
            console.log(data);
        });
    }
});