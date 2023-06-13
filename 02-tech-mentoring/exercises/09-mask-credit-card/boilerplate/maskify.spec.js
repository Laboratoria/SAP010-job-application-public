const maskify = require('./maskify');

describe('markify', () => {
  [
    ['4556364607935616', '############5616'],
    ['1', '1'],
    ['helloworld', '######orld'],
  ].forEach(([input, expected]) => {
    it(`should return ${expected} for ${JSON.stringify(input)}`, () => {
      expect(maskify(input)).toBe(expected);
    });
  });
});
