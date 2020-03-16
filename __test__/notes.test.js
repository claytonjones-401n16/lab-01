'use strict';

function trueAsF() {
  return true;
}

describe('Fake suite', () => {
  it('TrueAsF', () => {
    expect(trueAsF()).toBeTruthy();
  });

})