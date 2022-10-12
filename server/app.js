// 'Import' the Express module instead of http
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Initialize the Express application
const app = express();

//connect to mongoose to handle Express to MongoDB connection
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

//set up middleware
const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app
  .route("/status")
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  .get((request, response) => {
    response.status(200).json({ message: "Service healthy" });
  })
  //Handle POST method
  .post((request, response) => {
    response.json({ requestBody: request.body });
  });

const PORT = process.env.PORT || 4040;
// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(4040, () => console.log(`Listening on port ${PORT}`));
