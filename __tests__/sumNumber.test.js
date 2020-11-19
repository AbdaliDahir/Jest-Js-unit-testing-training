const SumNumber = require('../SumNumber');

describe("check for sum Numbers", () => {
  test('should return 0 if there is o argm', () => {
    expect(SumNumber()).toBe(0);
  })
  
  test('should return', () => {
    expect(SumNumber(10,20)).toBe(30);
  })
  
  test('should return Num', () => {
    expect(SumNumber(10)).toBe(10);
  })
  
  test('should return sum of numbers', () => {
    expect(SumNumber(1,20,5,9,7)).toBe(42)
  })
})

