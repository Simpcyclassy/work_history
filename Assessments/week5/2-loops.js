/**
  In this assessment, you will use your knowledge of javascript loops
  to complete the functions below.

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

// 1. write a function that takes an array as its first parameter and console logs
// every item in the array
oils = ['Coconut oil', 'PalmKernel oil', 'Olive oil', 'Avocado oil', 'Papaya oil', 'Lavender oil', 'Argan oil', 'Almond oil'];
printsEachItem(oils);
function printsEachItem(oils) {
  for (let oilIndex = 0; oilIndex < oils.length; oilIndex++) {
    console.log(oils[oilIndex]);
  }
}

// 2. write a function that takes an array as its first parameter and console logs
// every item with an odd index
oils = ['Coconut oil', 'PalmKernel oil', 'Olive oil', 'Avocado oil', 'Papaya oil', 'Lavender oil', 'Argan oil', 'Almond oil'];
printsOddIndex(oils);
function printsOddIndex(oils) {
  for (let oilIndex = 1; oilIndex < oils.length; oilIndex+=2) {
    console.log(oils[oilIndex]);
  }
}

// 3. write a function that takes an array as its first parameter and console logs
// every item with an even index
oils = ['Coconut oil', 'PalmKernel oil', 'Olive oil', 'Avocado oil', 'Papaya oil', 'Lavender oil', 'Argan oil', 'Almond oil'];
printsEvenIndex(oils);
function printsEvenIndex(oils) {
  for (let oilIndex = 0; oilIndex < oils.length; oilIndex+=2) {
    console.log(oils[oilIndex]);
  }
}

// 4. write a function that takes an array as its first parameter and a searchValue as
// its second parameter. The function returns true if the searchValue is in the array
// and false if it is not

oils = ['Coconut oil', 'PalmKernel oil', 'Olive oil', 'Avocado oil', 'Papaya oil', 'Lavender oil', 'Argan oil', 'Almond oil'];

function matchesSearchValue(oils, searchValue) {
  for (let oilIndex = 0; oilIndex < oils.length; oilIndex++) {
     if (oils[oilIndex] === searchValue ) {
       return true;
    }
  }
  return false
}


searchValue = 'Lavender oil';

console.log(items(oils, searchValue));// 5. write a function that takes an array as its first parameter, and a replaceValue as
// its second parameter. The function returns a new array where all the values in the
// array have been overwritten by the replaceValue.

  oils = ['Coconut oil', 'PalmKernel oil', 'Olive oil', 'Avocado oil', 'Papaya oil', 'Lavender oil', 'Argan oil', 'Almond oil'];
  replaceValue = ['Lavender oil'];
overwritesValue(oils, replaceValue);
function overwritesValue(oils, replaceValue) {
  for (let oilIndex = 0; oilIndex < oils.length; oilIndex++) { oils[oilIndex] = replaceValue
   console.log(oils[oilIndex]);                       }
}
// 6. write a function that takes an array as its first parameter, a searchValue as
// its second parameter and a replaceValue as the third parameter. The function returns
// a new array where only the searchValue has been overwritten by the replaceValue.
oils = ['Coconut oil', 'PalmKernel oil', 'Olive oil', 'Avocado oil', 'Papaya oil', 'Lavender oil', 'Argan oil', 'Almond oil'];
searchValue = 'Lavender oil';
replaceValue = 'Argan oil'

function overwritesSearchValue(oils, searchValue, replaceValue) {
  for (let oilIndex = 0; oilIndex < oils.length; oilIndex++) {
     if (oils[oilIndex] === searchValue ) { oils[oilIndex] = replaceValue
     console.log(oils[oilIndex])

  }                                                           }
}
overwritesSearchValue(oils, searchValue, replaceValue);
