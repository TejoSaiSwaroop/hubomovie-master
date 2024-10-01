const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
const dbURI = process.env.MONGODB_URI || "mongodb+srv://saiswaroop2674:Swaroop.com@cluster0.numxr0d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/hubomovie";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
