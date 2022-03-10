// Requirements
const express = require("express");
const fs = require("fs");
const notes = require("./db/store");
const path = require("path");
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");
