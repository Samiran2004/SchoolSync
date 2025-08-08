import express from 'express'

const app = express();

app.get('/health', (req, res) => {
    return res.status(200).json({
        status: 'Ok',
        message: "Server is up and running..."
    });
});

app.listen(8000, (err) => {
    if (err) {
        console.log("Error in server startup...");
    } else {
        console.log("Server running on port 8000");
    }
});