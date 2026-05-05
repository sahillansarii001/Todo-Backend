import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todo.routes.js";

dotenv.config();

// Connect DB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection check middleware
app.use((req, res, next) => {
  if (mongoose.connection.readyState !== 1 && req.path.startsWith("/api")) {
    return res.status(503).json({ 
      message: "Database not connected. Please check if your IP is whitelisted in MongoDB Atlas.",
      status: "error"
    });
  }
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Routes
app.use("/api/todo", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});