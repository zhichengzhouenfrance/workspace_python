// var obj = {
//   name : 'zhicheng'
// }
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);
//
//
// var personString = '{"name": "zhicheng", "age": 32}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var originalNote = {
  title : 'ttile',
  body: 'some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteFileString = fs.readFileSync('notes.json');

var note = JSON.parse(noteFileString);

console.log(typeof note);
console.log(note.title);
