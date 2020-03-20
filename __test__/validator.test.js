'use strict';

const Validator = require('../lib/validator.js');

const schema = {
  action: { type: 'string', required: true },
  payload: { type: 'string', required: true }
}

const validator = new Validator(schema);

describe('Testing validator module', () => {
  it('testing non-object: array', () => {
    expect(validator.isValid([1, 2, 3])).toBeFalsy();
  });
  
  it('testing non-object: number', () => {
    expect(validator.isValid(7)).toBeFalsy();
  });

  it('testing valid command', () => {
    const command = {
      action: 'add',
      payload: 'TEST'
    }
    expect(validator.isValid(command)).toBeTruthy();
  });

  it('testing invalid command property types', () => {
    const command = {
      action: true,
      payload: ['TEST']
    }
    expect(validator.isValid(command)).toBeFalsy();
  })
})