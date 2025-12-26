const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://jaanbrigith25:EvaD4mDqnJkH5Wbj@cluster0.i2tpz.mongodb.net/?appName=Cluster0"
    );
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
