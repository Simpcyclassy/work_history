/**
  In this assessment, you will use your knowledge of javascript iterator
  to complete the code below. Array specific functions that will be used for this
  assessment:
    > forEach
    > some
    > filter
    > map

  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR

  const {{name_of_function}} = () => {
    // Write your code here
  }

  ```
*/

const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

// 1. Using the `forEach` function complete the instructions below:
// Console.log every day in the week array
week.forEach(function(days) {
   console.log(' ~ ' + days)
});
// 2. Using the `some` function complete the instructions below:
// Check the week array for days that are longer than six letters

const hasDaysLongerThanSixLetters = function(days) {
  return days.length > 6;
}
console.log(week.some(hasDaysLongerThanSixLetters));
// 3. Using the `filter` function complete the instructions below:
// Filter the weeks array for all the days that are longer than six letters

const filteredDaysLongerThanSixLetters = week.filter(function(days) {
  return days.length > 6;
});
console.log(filteredDaysLongerThanSixLetters);


// 4. Using the `map` function complete the instructions below:
// create a new array that has all the days captialized

// HINT - use `toUpperCase` function to captialize strings
// https://www.w3schools.com/jsref/jsref_touppercase.asp

const arrayOfCapitalizedDays = week.map(days =>       days.toUpperCase());

console.log(arrayOfCapitalizedDays);
