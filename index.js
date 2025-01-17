const express = require("express");
const { scopePerRequest } = require("awilix-express");
const container = require("./books/container");

const app = express();

// Middleware to create a scope per request
app.use(scopePerRequest(container));

// Example route
app.use("/users", require("./books/booksControllers"));

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
