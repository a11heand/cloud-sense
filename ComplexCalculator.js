/*
Filename: ComplexCalculator.js

Description: 
This code implements a complex calculator that performs a variety of mathematical operations on complex numbers. It includes functions to add, subtract, multiply, and divide complex numbers, as well as calculate the modulus, conjugate, and argument. It also provides functionality to raise a complex number to a power, calculate the square root, and calculate the exponential and logarithm of a complex number. The code is designed to handle complex numbers with real and imaginary parts, and provides comprehensive error handling for invalid inputs.

Author: [Your Name]
Date: [Date]

*/

// Complex number class
class Complex {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  // Getters and setters
  get real() {
    return this._real;
  }

  set real(value) {
    if (isNaN(value)) {
      throw Error("Real part must be a number");
    }
    this._real = parseFloat(value);
  }

  get imag() {
    return this._imag;
  }

  set imag(value) {
    if (isNaN(value)) {
      throw Error("Imaginary part must be a number");
    }
    this._imag = parseFloat(value);
  }

  // Complex number operations

  // Addition of complex numbers
  add(complex) {
    return new Complex(this.real + complex.real, this.imag + complex.imag);
  }

  // Subtraction of complex numbers
  subtract(complex) {
    return new Complex(this.real - complex.real, this.imag - complex.imag);
  }

  // Multiplication of complex numbers
  multiply(complex) {
    const real = this.real * complex.real - this.imag * complex.imag;
    const imag = this.real * complex.imag + this.imag * complex.real;
    return new Complex(real, imag);
  }

  // Division of complex numbers
  divide(complex) {
    const denominator = complex.real ** 2 + complex.imag ** 2;
    const real =
      (this.real * complex.real + this.imag * complex.imag) / denominator;
    const imag =
      (this.imag * complex.real - this.real * complex.imag) / denominator;
    return new Complex(real, imag);
  }

  // Modulus of a complex number
  modulus() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  // Complex conjugate
  conjugate() {
    return new Complex(this.real, -this.imag);
  }

  // Argument of a complex number
  argument() {
    return Math.atan2(this.imag, this.real);
  }

  // Complex number raised to a power
  power(n) {
    const modulus = this.modulus();
    const argument = this.argument();
    const real = Math.pow(modulus, n) * Math.cos(n * argument);
    const imag = Math.pow(modulus, n) * Math.sin(n * argument);
    return new Complex(real, imag);
  }

  // Square root of a complex number
  sqrt() {
    const modulus = this.modulus();
    const argument = this.argument();
    const real = Math.sqrt(modulus) * Math.cos(argument / 2);
    const imag = Math.sqrt(modulus) * Math.sin(argument / 2);
    return new Complex(real, imag);
  }

  // Exponential of a complex number
  exp() {
    const real = Math.exp(this.real) * Math.cos(this.imag);
    const imag = Math.exp(this.real) * Math.sin(this.imag);
    return new Complex(real, imag);
  }

  // Natural logarithm of a complex number
  log() {
    const real = Math.log(this.modulus());
    const imag = this.argument();
    return new Complex(real, imag);
  }
}

// Example usage
const complex1 = new Complex(2, 3);
const complex2 = new Complex(4, 5);

const sum = complex1.add(complex2);
console.log("Sum:", sum);

const difference = complex1.subtract(complex2);
console.log("Difference:", difference);

const product = complex1.multiply(complex2);
console.log("Product:", product);

const quotient = complex1.divide(complex2);
console.log("Quotient:", quotient);

const modulus = complex1.modulus();
console.log("Modulus:", modulus);

const conjugate = complex1.conjugate();
console.log("Conjugate:", conjugate);

const argument = complex1.argument();
console.log("Argument:", argument);

const power = complex1.power(2);
console.log(`Complex number raised to the power of 2: ${power.real} + ${power.imag}i`);

const sqrt = complex1.sqrt();
console.log("Square root:", sqrt);

const exp = complex1.exp();
console.log("Exponential:", exp);

const log = complex1.log();
console.log("Natural logarithm:", log);