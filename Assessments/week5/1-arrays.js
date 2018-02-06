/**
  In this assessment, you will use your knowledge of javascript arrays
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

// 1. write a function that takes an array as its first parameter and returns
// the first item in the array
oils = ['Coconut oil', 'PalmKernel oil', 'Olive oil', 'Avocado oil', 'Papaya oil'];
function returnsFirstParameter(oils) {
return oils.slice(0, 1);
}
returnsFirstParameter(oils);
// 2. write a function that takes an array as its first parameter and returns
// the last item in the array
oils = ['Coconut oil', 'PalmKernel oil', 'Olive oil', 'Avocado oil', 'Papaya oil'];
function returnsLastParameter(oils) {
return oils.slice(-1);
}
returnsLastParameter(oils);
// 3. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// beginning of the array.
oils = ['Coconut oil', 'PalmKernel oil', 'Olive oil', 'Avocado oil', 'Papaya oil'];
butter = 'SheaButter';

function returnsArrayWithBeginningValueAdded(oils, butter) {
 oils.unshift(butter);
   return oils;
}
returnsArrayWithBeginningValueAdded(oils, butter);

// 4. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// end of the array.
oils = ['Coconut oil', 'PalmKernel oil', 'Olive oil', 'Avocado oil', 'Papaya oil'];
butter = 'SheaButter';

function returnsArrayWithEndValueAdded(oils, butter) {
oils.push(butter);
  return oils;}
 }
returnsArrayWithEndValueAdded(oils, butter);
// 5. write a function that takes an array as its first parameter, a value as
// its second parameter and an index as the third parameter. The function returns
// a new array where the value can be found at that given index.
oils = ['Coconut oil', 'PalmKernel oil', 'Olive oil', 'Avocado oil', 'Papaya oil'];
butter = 'SheaButter';
index = 3;

 function returnsNewValueAtAnIndex(oils, butter, index) {
 oils[index] = butter;
   return oils;

 }

 returnsNewValueAtAnIndex(oils, butter, index);
