import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Membaca konfigurasi dari file .env
dotenv.config();

// Membuat aplikasi Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mengambil port dari .env
const port = process.env.PORT || 8080;

// Route utama untuk mengecek server
app.get("/", (req, res) => {
    res.json({
        message: "Selamat datang di SceneIt!"
    });
});

// Menghubungkan database dan menjalankan server
const startServer = async () => {
    await connectDB();

    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });
};

startServer();

