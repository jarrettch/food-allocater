const ratios = require('./ratios.js');

test('ratios function exists', () => {
  expect(typeof ratios).toBeDefined();
});

test('ratios to be a function', () => {
  expect(typeof ratios).toEqual('function');
});

test("no portions or ratios return empty", () => {
  expect(ratios({1: 1, 2:1, 3:1}, 11)).toEqual({1: 4, 2: 4, 3: 3})
})

test("empty", () => {
  expect(ratios({1: 1}, 0)).toEqual({1: 0})
})

test("allocate food equitably", () => {
  expect(ratios({1: 2, 2: 2, 3: 1}, 0)).toEqual({1: 3, 2: 5, 3: 3})
})