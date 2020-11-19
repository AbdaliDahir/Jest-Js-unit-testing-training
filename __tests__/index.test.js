const Hello = require("../index");

test('hello from index', () => {
  expect(Hello()).toBe("hello world");
})