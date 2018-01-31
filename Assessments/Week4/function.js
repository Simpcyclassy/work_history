
//In this assessment, you will be creating new Javascript functions.
//Make sure to read the directions to build the functions carefully.
//You should use the below patterns to write your functions:
// `
// function {{name_of_function}} {
  // Write your code here
}

OR

//  const {{name_of_function}} = () => {
  const letsBegin = () => {
}



// 1. write a function that takes a number as a parameter and returns it as a
// string
function myString (num) {
return num.toString();
}

// 2. write a function that takes a number as a parameter and returns that
// number subtracted by 1
const subtract = (num) => {
return --num;
}

// 3. write a function that takes a number as a parameter and returns that
// number added by 1
function add (num) {
return ++num;
}

// 4. write a function that takes two number as its parameters and returns the
// addition of those two numbers
function numAdd (num, number) {
return num + number;
}

// 5. write a function that takes a number as its parameter and returns the
// squared of that number
function numSquare (num) {
return num * num;
}

// 6. write a function that takes a number and returns true if the number is odd
// and false if it is not
function isOdd (number) {
if (number % 2 > 0){
  return true;
}
else {
  return false;
}
}

// 7. write a function that takes two strings as its parameters and returns the
// combination of those two strings
function twoStrings (string1, string2) {
return string1.concat(string2);
}
// 8. write a function that takes the radius of a circle a parameter and returns
// the Area of the circle.
// For this exercise π (pie) can equal `3.14`
function AreaOfTheCircle (radius) {
return 3.14 * (radius**2);
}
