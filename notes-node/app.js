console.log('starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOption = {
  describe: 'Title of note',
  demande: true,
  alias: 't'
}
const bodyOption = {
  describe: 'Title of body',
  demande: true,
  alias: 'b'
}

var command = process.argv[2];
const argv = yargs
          .command('add', 'add a new note', {
            title: titleOption,
            body: bodyOption 
          })
          .command('list', 'list all note')
          .command('read', 'read a note', {
            title: titleOption
          })
          .command('remove', 'remove a note', {
            title: titleOption
          })
          .help()
          .argv;



console.log('the recived argument : ', process.argv);
console.log('the recived argument : ', argv);
if(command === 'add') {
  console.log('Add the new note');
  var note = notes.addNote(argv.title, argv.body);
  _.isNil(note) ?  console.log('the note was duplicated') :  console.log(`we have add the note : ${JSON.stringify(note)}`);

} else if (command === 'remove') {
  if(notes.remove(argv.title)){
    console.log('the note with title has been removed');
  } else {
    console.log('the note has not been found');
  }
} else if (command === 'list') {
  var notesArrays = notes.getAll();
  notesArrays.forEach((note) => {
    console.log('title : ', note.title);
    console.log('body : ', note.body);
  })
} else if (command === 'read') {
  var note = notes.read(argv.title);
  if(note) {
    console.log('get the note :' + JSON.stringify(note));
  }
} else {
  console.log('the command is not recognized');
}
