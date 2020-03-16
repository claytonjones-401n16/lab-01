'use strict';

jest.mock('minimist');

const minimist = require('minimist');

const Input = require('../lib/input.js');



describe('Testing input module', () => {

  it('Testing validate(): Should return false if flag is not valid', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        b: 'text'
      }
    })
    const input = new Input();
    expect(input.validate()).toBeFalsy();
  });

  it('Testing validate(): Should return false if flag contains no data', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        a: true
      }
    })
    const input = new Input();
    expect(input.validate()).toBeFalsy();
  });

  it('Testing validate(): Should return true if flag is -a', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        a: 'text'
      }
    })
    const input = new Input();
    expect(input.validate()).toBeTruthy();
  });

  it('Testing validate(): Should return true if flag is -a', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        add: 'text'
      }
    })
    const input = new Input();
    expect(input.validate()).toBeTruthy();
  });

  it('Testing action(): Should return object with action and payload if flags are valid', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        add: 'text'
      }
    })
    const input = new Input();
    expect(input.action()).toMatchObject({action: 'add', payload: 'text'});
  });

  it('Testing action(): Should not return anything if flags are invalid', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        b: 'text'
      }
    })
    const input = new Input();
    expect(input.action()).toBeFalsy();
  });

  it('Testing action(): Should not return anything if flags are empty', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        a: true
      }
    })
    const input = new Input();
    expect(input.action()).toBeFalsy();
  });

})

// function trueAsF() {
//   return true;
// }

// describe('Fake suite', () => {
//   it('TrueAsF', () => {
//     expect(trueAsF()).toBeTruthy();
//   });
// })