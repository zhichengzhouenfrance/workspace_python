console.log('starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    const fileString = fs.readFileSync('notes_json');
    return JSON.parse(fileString);
  } catch (e) {
    return [];
  }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes_json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  console.log('adding note', title, body);
  var notes = fetchNotes();
  var duplicateNotes = notes.filter((note) =>  note.title === title);
  if(duplicateNotes.length === 0) {
    const note = {
      title,body
    }
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var getAll = () => {
  console.log('get all notes');
  return fetchNotes();
}

var read = (title) => {
  var notes = fetchNotes();
  debugger;
  return notes.filter((note) => note.title === title)[0];
}

var remove = (title) => {
  console.log('Begin remove note: ', title);
  var notes = fetchNotes();
  var notesFiltered = notes.filter((note) => title !== note.title);
  saveNotes(notes);
  return notes.length !== notesFiltered.length;
}

module.exports = {
  addNote,
  getAll,
  read,
  remove
}
