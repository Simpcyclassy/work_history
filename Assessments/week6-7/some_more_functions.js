/**
  Its important that you keep practicing creating functions. Here are some more
  that you will need to implement

  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR

  const {{name_of_function}} = () => {
    // Write your code here
  }

*/

// 1. write a function that takes a string as its first parameter. This function
// counts the number of vowels in the string and returns that number.
// EX1:
  // sample input: "Hello World"
  // sample output: 3

function numberofVowelsCount(input) {
  const vowels = 'aeiou';
  let output = 0;

  for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
      if (input[inputIndex] === vowels[vowelIndex]) {
      output++
      }
    }
  }
  return output;

}
console.log(numberofVowelsCount('Hello World'))


// 2. write a function that takes a string as it first parameter. This function
// return a new string with the first 3 letters lower-cased. If the string is less
// than 3 letters long, this function will return the new string with all letters
// upper-cased.
// EX1:
  // sample input: "HELLO"
  // sample output: "helLO"
// EX2:
  // sample input: "he"
  // sample output: "HE"
  function firstThreeLetterstoLowerCase(string) {
      if(string.length >= 3) {
    return string.slice(0, 3).toLowerCase();
       }
   else (string.length < 3){
     return  string.toUpperCase();
    }

  }


// 3. write a function that takes a string as it first parameter. This function
// returns the first half of the string if the string is even length. Otherwise,
// it will return null;
// EX1:
  // sample input: "HelloWorld"
  // sample output: "Hello"
// EX2:
  // sample input: "Hello World"
  // sample output: null
  function returnsHalfofStringElWhenIsEven(string) {
         const stringLength = string.length
         if (stringLength % 2 === 0) {

             return string.slice(0, stringLength / 2);
         }
         else{
             return null;
              }
   }

// 4. write a function that takes an array of numbers as its first parameter.
// This function returns the sum of the numbers in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 29
  function returnsSumofArray(array) {

  let sum = 0;

  for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    sum += array[arrayIndex]
  }
    return sum;
  }
// 5. write a function that takes an array of numbers as its first parameter.
// This function returns the number that is the most frequent in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 1
  function mostFrequent(array) {
   const hash = {};
    let arrayIndex = 0;

     for(arrayIndex ;  arrayIndex < array.length; arrayIndex++){
        hash[array[arrayIndex]] += 1;
     }

     let highest = array[0];

       if (hash[highest] < hash[array[arrayIndex]]) {
         highest = array[arrayIndex]
       }

     return highest;
 }
