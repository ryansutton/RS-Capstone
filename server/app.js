// 'Import' the Express module instead of http
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

// Initialize the Express application
const app = express();

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

const PORT = process.env.PORT || 4040;
// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(4040, () => console.log(`Listening on port ${PORT}`));