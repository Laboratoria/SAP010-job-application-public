const analyseArray = require('./analyseArray');

describe('analyseArray', () => {
  [
    [[-17, 24, 9, 32, 100, -80, 28, 0, -10], [100, -80, 32]],
    [[0], [0, 0, undefined]],
    [[0, 0], [0, 0, undefined]],
    [[0, 1], [1, 0, 0]],
    [[0, 1, -1], [1, -1, 0]],
    [[0, 1, -1, 1], [1, -1, 0]],
    [[3, 2, 1], [3, 1, 2]],
    [[3, 1, 2], [3, 1, 2]],
    [[-1, -2, -3], [-1, -3, -2]],
  ].forEach(([nums, expected]) => {
    it(`should return ${expected} for ${JSON.stringify(nums)}`, () => {
      expect(analyseArray(nums)).toEqual(expected);
    });
  });
});
