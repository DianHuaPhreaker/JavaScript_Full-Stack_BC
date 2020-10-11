const age = new Number(36);
typeof age; //object

// To Exponenetial - get string representing the number in exponential notation
console.log(new Number(10).toExponential());
console.log(new Number(21.2).toExponential());

console.log(new Number(21.2).toExponential(1));
console.log(new Number(21.2).toExponential(5));

// To Fixed() - get a string representing the number in fixed point notation
console.log(new Number(21.2).toFixed());
console.log(new Number(21.2).toFixed(0));
console.log(new Number(21.2).toFixed(1));
console.log(new Number(21.2).toFixed(2));

// To Precision() - method returns a string representing the number to a specified precision
// console.log(new Number(21.2).toPrecision(0)); argument must be between 1 and 100
console.log(new Number(21.2).toPrecision(1));
console.log(new Number(21.2).toPrecision(2));
console.log(new Number(21.2).toPrecision(3));
console.log(new Number(21.2).toPrecision(4));
console.log(new Number(21.2).toPrecision(5));

// to String - method returns a string representation of number object.
// Accepts an optional arguemnt to set the radix

console.log(new Number(10).toString());
console.log(new Number(10).toString(2));
console.log(new Number(10).toString(8));

// .valueOf()
