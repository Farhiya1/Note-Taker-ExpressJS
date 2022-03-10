const path = require("path");
const router = require("express").Router();

// /notes -> give back notes.html
router.get("/notes", (request, response) => {
  response.sendFile(path.join(__dirname, "../public/notes.html"));
});
// /* -> give back index.html
router.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
