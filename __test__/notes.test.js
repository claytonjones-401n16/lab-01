'use strict';

const Notes = require('../lib/notes.js');

describe('Notes Module', () => {
  it('Testing operation(): should call add() and output console log', () => {
    let note = new Notes({action: 'add', payload: 'text'})
    const spy = jest.spyOn(console, 'log');
    const operation = jest.fn(note.operation());
    operation();

    expect(spy).toHaveBeenCalled();
  })

  it('Testing add(): should output console log', () => {
    let note = new Notes({action: 'add', payload: 'text'})
    const spy = jest.spyOn(console, 'log');
    const add = jest.fn(note.add());
    add();

    expect(spy).toHaveBeenCalled();
  })
})



// function trueAsF() {
//   return true;
// }

// describe('Fake suite', () => {
//   it('TrueAsF', () => {
//     expect(trueAsF()).toBeTruthy();
//   });

// })