import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB berhasil terhubung!");
    } catch (error) {
        console.error("Koneksi MongoDB gagal:", error.message);
        process.exit(1);
    }
};

export default connectDB;
