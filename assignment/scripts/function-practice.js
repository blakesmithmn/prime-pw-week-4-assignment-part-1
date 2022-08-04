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
  return name;
}
// Remember to call the function to test
let name = 'Blake';
console.log('Hello,', helloName(name));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('The sum of our two numbers is:', addNumbers(321, 4985));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log('When Multiplying 2 x 31 x 43 we get:', multiplyThree(2, 31, 43));


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
console.log('The last smoothie flavor is:', getLast(smoothieFlavors));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
    // end check if the value exists
    else {
    } return false;
  } // end find value

}

let numberArray = [1, 2, 3, 4, 5, 6, 7, 13];
let secretNumber = 13;

console.log('The value 13 exists in our array:', find(13, numberArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
// function sumAll(value, array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// console.log(sumAll([1, 2, 3, 4, 5]));

// i feel like i'm close but something just isn't working :/

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let numbers = [-1, 3, 5, -17, 92];
function positive([]) {
  if (array[i] > 0) {
    return;
  }
}

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
