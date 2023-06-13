const getPrintableNames = require('./getPrintableNames');

describe('getPrintableNames', () => {
  [
    [
      ['marie curie', 'Mary Anning', 'ada lovelace', 'SALLY RIDE'],
      ['M. Curie', 'M. Anning', 'A. Lovelace', 'S. Ride'],
    ],
  ].forEach(([nums, expected]) => {
    it(`should return ${expected} for ${JSON.stringify(nums)}`, () => {
      expect(getPrintableNames(nums)).toEqual(expected);
    });
  });
});
