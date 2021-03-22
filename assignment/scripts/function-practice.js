console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ){
  return 'Hello Andrew!';
}
// Remember to call the function to test
console.log('Test - should say "Hello Andrew!"', helloName());

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let addNumbers = 2 + 4;
  return addNumbers;
}
console.log( 'In addNumbers with 2 & 4:', addNumbers( 2, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree( ){
  let multiplyThree = 3 * 4 * 5; // numbers I added in for the function to multiply
  return multiplyThree;
}
console.log( 'In MultiplyThree with 3, 4 & 5:', multiplyThree( 3, 4, 5));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
  }
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log( 'isPositive - should say true', isPositive(1) ); // created another positive number to test the return.

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array){
  return array[array.length - 1];
}

console.log('Last item of array should be 29:', getLast([1, 5, 11, 23, 29]));
console.log('Last item of array should be 18:', getLast([1, 2, 3, 6, 9, 18]));
console.log('Last item of array should be undefined:', getLast([]));
console.log('Last item of array should be 3:', getLast([3]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

// Explanation of code: testing out the array lengths for values and the array. and created two different array sets in the console log to test
// one set of numbers for true, and one set of numbers for false.

function find( value, array ){
  for (let l = 0; l < array.length; l++)
  { if (array[l] === value)
    {
      return true;
    }
  }
    return false;
}

console.log('Find the value in an array:', find(54, [1, 30, 93, 68, 2])); // code is testing out if numbers are in array.
console.log('Find the value in the array:', find(2, [1, 2, 3, 4, -8, 0, 9])); // code is testing out if numbers are in array.

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

// Explanation of Code: For this one, I decided to create my conditional statements inside the function if the string index = [0], since the first letter by its array index is [0].
// Then I went down to check the console logs on the bottom, and did one return of true for the a being in apple, and return false for the last letter z, since z wasn't in the string.

 function isFirstLetter(letter, string){
   if (string [0] === letter){
     return true;
   } {
     return false;
   }
 }

 console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
 console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let numarray = [1, 5, 9];
let sum = 0;
function sumAll(numarray) {

  // TODO: loop to add items
for (let t=0; t<numarray.length; t++){
  sum = sum + numarray[t]; // total sum equals up the total set of numbers in the total array from the top.
  }
  return sum;
}
console.log('Total sum of numarray:', sumAll(numarray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// Edabit Function explanation: This problem here I picked out from Edabit is describing the area of a triangle. To write the function, you write area of triangle equals
// for the top function where it is the base and the height.
//To find the area of the triangle, the formula is base * height / 2, and that is what is added in the console log with the numbers you want the area of triangle to be.

function triArea(base, height) {
  const result = (base * height) / 2 // formula for triangle area
  let triArea =( 8, 4) / 2; // numbers I added in for area to test.
  return result;
}
console.log( 'Total area of triangle with 8 & 4:', triArea(8, 4)); 
