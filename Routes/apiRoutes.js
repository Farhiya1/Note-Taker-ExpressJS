const router = require("express").Router();
const res = require("express/lib/response");
const store = require("../db/store");

// /api/notes -> response with all notes from JSON file
router.get("/api/notes", (request, response) => {
  store
    .getNotes()
    .then((notes) => {
      return response.json(notes);
    })
    .catch((error) => response.status(500).json(error));
});

