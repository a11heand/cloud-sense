/**
 * Filename: complexCode.js
 *
 * Description: This code demonstrates a complex and sophisticated JavaScript program that showcases
 * various advanced concepts and techniques.
 */

// Code starts here
const MAX_ITERATIONS = 100000000;

/**
 * Calculates the factorial of a given number using a recursive approach.
 * @param {number} num - The number whose factorial is to be calculated.
 * @returns {number} The factorial of the given number.
 */
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

/**
 * Generates the Fibonacci series up to a certain number of terms using a loop.
 * @param {number} terms - The number of terms in the Fibonacci series to generate.
 * @returns {Array} An array containing the Fibonacci series.
 */
function generateFibonacciSeries(terms) {
  const series = [0, 1];
  for (let i = 2; i < terms; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}

/**
 * Prints a diamond pattern made of asterisks based on the given size.
 * @param {number} size - The size of the diamond pattern.
 */
function printDiamondPattern(size) {
  const midPoint = Math.floor(size / 2);
  for (let i = 0; i < size; i++) {
    let pattern = "";
    const spaces = Math.abs(midPoint - i);
    const asterisks = size - 2 * spaces;

    pattern += " ".repeat(spaces);
    pattern += "*".repeat(asterisks);
    console.log(pattern);
  }
}

/**
 * Checks if a given string is a palindrome.
 * @param {string} str - The string to check for palindrome.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

/**
 * Calculates the sum of the digits of a given number.
 * @param {number} num - The number whose digit sum is to be calculated.
 * @returns {number} The sum of the digits.
 */
function calculateDigitSum(num) {
  let sum = 0;
  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

/**
 * Implements a binary search algorithm to find the index of an element in a sorted array.
 * @param {Array} arr - The sorted array to search in.
 * @param {*} target - The element to search for.
 * @returns {number} The index of the element if found, -1 otherwise.
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

/**
 * Represents a class named "Person" with properties and methods related to a person's information.
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }

  static compareAges(person1, person2) {
    if (person1.age < person2.age) {
      return -1;
    } else if (person1.age > person2.age) {
      return 1;
    } else {
      return 0;
    }
  }
}

/**
 * Demonstrates the usage of the various functions and classes defined above.
 */
function runExample() {
  const factorialResult = factorial(5);
  console.log(`Factorial of 5: ${factorialResult}`);

  const fibonacciSeries = generateFibonacciSeries(10);
  console.log(`Fibonacci Series (10 terms): ${fibonacciSeries}`);

  printDiamondPattern(9);

  const isPalindromeResult = isPalindrome("madam");
  console.log(`Is "madam" a palindrome? ${isPalindromeResult}`);

  const digitSum = calculateDigitSum(12345);
  console.log(`Sum of digits in 12345: ${digitSum}`);

  const sortedArray = [1, 2, 5, 7, 9, 10];
  const searchResult = binarySearch(sortedArray, 7);
  console.log(`Index of 7 in sortedArray: ${searchResult}`);

  const person1 = new Person("John Doe", 30);
  const person2 = new Person("Jane Smith", 25);
  person1.greet();
  person2.greet();
  console.log(`Comparison of ages: ${Person.compareAges(person1, person2)}`);
}

runExample();
// Code ends here