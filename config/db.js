import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    if (error.message.includes("ETIMEOUT") || error.message.includes("whitelist")) {
      console.log("TIP: Check your MongoDB Atlas IP Whitelist settings.");
    }
    process.exit(1);
  }
};

export default connectDB;
