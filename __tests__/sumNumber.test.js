const SumNumber = require('../SumNumber');

test('should return', () => {
  expect(SumNumber(10,20)).toBe(30);
})

test('should return Num', () => {
  expect(SumNumber(10)).toBe(10);
})

