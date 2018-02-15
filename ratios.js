// In our product, we’ve exposed a way for users to plan a meal by specifying
// a certain ratio of items they would like the meal to be composed of, and
// specifying the total number of portions the meal will consist of. This
// feature then determines how many portions should be allocated for each 
// item i.e. We need a meal with a 1-to-2 ratio of a vegetarian item to a meat item,
// for 15 portions. The result should be 5 portions of the vegetarian item and 10 portions of the meat item.

// Write a function that satisfies the following:
// Accepts 2 arguments:
// A dictionary/map where the keys are numeric identifiers for a certain food item
// and the values are the ratio of that item desired
// An integer indicating how many portions the meal should serve
// Returns a dictionary/map where the keys are numeric identifiers for each food item
// and the values are the actual quantities for each food item
// Assigns all portions
// Only assigns integers for portion counts
// Chooses the largest remainder for allocating non-integer portion counts
// If there is no largest remainder, the item with the smallest numeric ID should be chosen
// Accepts any number of items and ratios

// f({}, 1) —> {}
// f({1: 1}, 2) —> {1:2}
// f({1: 1}, 0) —> {1: 0}
// f({1: 1, 2:1, 3:1},  11) —> {1: 4, 2: 4, 3: 3}

// const foods = {1: 1, 2: 1, 3: 1}
const foods = {1:1, 2:2, 3:1}
// const foods = {1: 1}

const portions = 11

// meal {1: 4, 2: 4, 3: 3}

function ratios(f, p) {
  let meal = {};
  if (p === 0) return {'1': 0}
  while (p > 0) {
    for (let key in f) {
      if (p > 0) {
        if (!meal[key]) {
          meal[key] = 0
        }

        if (f[key] > p){
          console.log('he')
          // return {'1': 0}
          // break
        } else {
          meal[key] += f[key]
        }
        p -= f[key]
        // console.log(f[key])
      }
    }
  }
  // console.log(f)
  console.log(meal)
  return meal
}

ratios(foods, portions)

// module.exports = ratios;