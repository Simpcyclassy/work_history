const kelvin = prompt('What is the Kelvin temperature today?');
const celsius = kelvin - 273;
// I am converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// I am rounding off the decimals
fahrenheit = Math.floor(fahrenheit);
// This logs the value to the console
console.log(`The temperature is ${fahrenheit} degrees fahrenheit. `);
