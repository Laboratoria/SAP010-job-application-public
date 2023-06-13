const fn = require('./dynamicArray');

describe('dynamicArray', () => {
  [
    [
      [
        2,
        [
          [1, 0, 5],
          [1, 1, 7],
          [1, 0, 3],
          [2, 1, 0],
          [2, 1, 1],
        ],
      ],
      [7, 3],
    ],
  ].forEach(([args, expected]) => {
    it(`should return ${expected} for ${JSON.stringify(args)}`, () => {
      expect(fn(...args)).toEqual(expected);
    });
  });
});

