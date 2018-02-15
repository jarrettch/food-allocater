const ratios = require('./ratios.js');

test('ratios function exists', () => {
  expect(typeof ratios).toBeDefined();
});

test('ratios to be a function', () => {
  expect(typeof ratios).toEqual('function');
});

test("allocate all portions", () => {
  expect(ratios({1: 1, 2:1, 3:1}, 11)).toEqual({1: 4, 2: 4, 3: 3})
})

test("return an empty meal when no portion amount is given", () => {
  expect(ratios({1: 1}, 0)).toEqual({1: 0})
})

// TODO: Get this test to pass
test("allocate food equitably", () => {
  expect(ratios({1: 2, 2: 2, 3: 1}, 11)).toEqual({1: 3, 2: 5, 3: 3})
})