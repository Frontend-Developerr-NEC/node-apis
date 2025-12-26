const express = require("express");

const app = express();
const connectDB = require("./db");
const cors = require("cors");

app.use(express.json());

const userModel = require("./models/user.js");
app.use(cors());
connectDB();

app.get("/", async (req, res) => {
  return res.json({ "API Page:":"Working" });
});
app.get("/api/v1/gusers", async (req, res) => {
  const response = await userModel.find();
  return res.json({ items: response });
});

app.listen(8000, () => {
  console.log("Server Starting...");
});
