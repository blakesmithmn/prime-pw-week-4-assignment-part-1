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


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  console.log('Hello,', name, 'how are you!?');
}
// Remember to call the function to test
helloName('Blake');
helloName('Laura');

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('The sum of 321 & 4985 is:', addNumbers(321, 4985));
console.log('The sum of 1 & 2 is:', addNumbers(1, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log('When Multiplying 2 x 31 x 43 we get:', multiplyThree(2, 31, 43));
console.log('When Multiplying 1 x 2 x 3 we get:', multiplyThree(1, 2, 3));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else {
    return false;

  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));
console.log('isPositive - should say true', isPositive(321));
console.log('isPositive - should say false', isPositive(-31));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array) {
  if (array.length > 0) {
    return array[array.length - 1];
    console.log('the last item in the array is:', getLast());
  }
  else if (!array.length) {
    return undefined;
    console.log('The array is empty:', getLast());

  }
}
//testing our work

let soda = ['coke', 'pepsi', 'dr pepper', 'sprite'];
let smoothieFlavors = [];
console.log('The last soda flavor is:', getLast(soda));
console.log('The last smoothie flavor is (should be undefined):', getLast(smoothieFlavors));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
    //i don't really get why this exists out of the function? JK class helped :)
  } return false; // this exists outside of the loop because it should only run if the loop fails
} // end find value



let numberArray = [1, 2, 3, 4, 5, 6, 7, 13];

console.log('The value 13 exists in our array (expect true):', find(13, numberArray));
console.log('The value -124 exists in our array (expect false):', find(-124, numberArray));
console.log('The value 2 exists in our array (expect true):', find(2, numberArray));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)) {
    return true;
  }
  return false;
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));
console.log('isFirstLetter - should say true', isFirstLetter('m', 'mango'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'mango'));

// 9. Function to return the sum of all numbers in an array
let sum = 0;
function sumAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let testArray = [1, 2, 3, 4, 5, 6, 7];
console.log(testArray);
console.log('The sum of testArray is:', sumAll(testArray));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


// after reading the question again i think i misunderstood it ... but i'm gonna leave this in anyway
// it was fun to try even if it didn't work ... i was trying to make a function
// that took an array and converted all the values to positive integers

function positive(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = -1 * array[i];
    }
  }
}

let numbers = [-1, 3, 5, -17, 92];
console.log(positive(numbers));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
