'use strict';

const input = require('../lib/input.js');

describe('Testing input', () => {
  it('Should return error if flag is not valid', () => {
    expect(input.validate({ _: [], b: 'beep' })).toBe('Error!');
  });

  it('Should return obj with something in payload is flag is valid', () => {
    expect(input.validate({ _: [], a: 'beep' }).payload).toBeTruthy();
  });

  it('Should return error if no data is given', () => {
    expect(input.validate({ _: [], a: true })).toBe('Error!');
  });

  // test for if a: 'true' as edge case
})