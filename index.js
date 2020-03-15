'use strict';

// require lib/input.js
// require lib/notes.js

let input = require('minimist')(process.argv.slice(2));

if (input.a || input.add) console.log('Good');
else console.log('Error!')

