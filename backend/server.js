const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const cors = require("cors");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoutes");
const app = express();

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Cors
app.use(
  cors({
    origin: ["http://localhost:3000", "https://task-manager-1ecc.onrender.com"],
  })
);
app.use(taskRoutes);
//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Connection to MongoDB
// connectDB();
//Refactoring code sequences so that we connect to our database first then run our server :
// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server is running on port: ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// startServer();

// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });
//Second method to connect to our DataBase:
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
