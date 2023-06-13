const countVowels = require('./countVowels');

describe('countVowels', () => {
  [
    ['aaa', { a: 3, e: 0, i: 0, o: 0, u: 0 }],
    ['aaabrteenkkau', { a: 4, e: 2, i: 0, o: 0, u: 1 }],
  ].forEach(([nums, expected]) => {
    it(`should return ${expected} for ${JSON.stringify(nums)}`, () => {
      expect(countVowels(nums)).toEqual(expected);
    });
  });
});
