console.log('starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash')

var res = notes.addNote();

console.log(`result : ` + notes.add(1,2));

var filterdArray = _.uniq([1,4,5,4,3,7,1,'zhicheng']);

console.log(filterdArray);

// var user = os.userInfo();
//
// fs.appendFile('greeting.txt', `hello ${user.username}, you are ${notes.age}  years old.`, function(err) {console.log(err);});
