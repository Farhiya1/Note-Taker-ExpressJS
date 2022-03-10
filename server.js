// Requirements
const express = require("express");
const fs = require("fs");
const notes = require("./db/store");
const path = require("path");
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

// Initialise the app and assign PORT variable
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("/public"));

app.use("/api", apiRouter);
app.use("/", htmlRouter);
// app.use("/api/notes", notes);

// Start the app on the given port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.....`);
});
