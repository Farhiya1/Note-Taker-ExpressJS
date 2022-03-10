// File for interacting with locally stored data
// Requirements
const fs = require("fs");
const util = require("util");

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

class Store {
  readFile() {
    return readFilePromise("db/db.json", "utf8");
  }
  writeFile(newNotes) {
    return writeFilePromise("db/db.json", JSON.stringify(newNotes));
  }

  getNotes() {
    return this.readFile().then((notes) => {
      return JSON.parse(notes);
    });
  }

  postNote(newNote) {
    return this.getNotes()
      .then((notes) => {
        return [...notes, newNote];
        console.log(notes);
      })
      .then((newNotesArray) => {
        console.log(newNotesArray);
        this.writeFile(newNotesArray);
      })
      .then(() => {
        return newNote;
      });
  }
}

module.exports = new Store();
