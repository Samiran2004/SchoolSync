import mongoose from "mongoose";
import figlet from "figlet";

const connectDB = async (DB_URI) => {
    try {
        if (!DB_URI) {
            throw new Error("DB URI not define...");
        }

        await mongoose.connect(DB_URI);

        figlet("Database connected...", (err, data) => {
            if (err) {
                console.log("Figlet error...");
                return;
            }
            console.log(data);
        })
    }
    catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
}

export default connectDB;