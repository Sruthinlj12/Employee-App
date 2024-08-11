const mongoose = require("mongoose");

// Replace the following string with your actual MongoDB connection string
const uri = "mongodb://localhost:27017/your-database-name"; // Local MongoDB
// For cloud-based MongoDB, use a connection string like the one provided by MongoDB Atlas
// const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-database-name?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true, // Options to avoid deprecation warnings
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error);
  });
