const age = new Number(36);
console.log(typeof age);
console.log(age.valueOf(36));

// Number.isNan
/* NaN is a special case. A number is NaN only if it’s NaN or if it’s a division of 0 by 0 expression,
which returns NaN. In all the other cases, we can pass it what we want but it will return false
*/
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(0 / 0));

console.log(Number.isNaN(1));
console.log(Number.isNaN("Flavio"));
console.log(Number.isNaN(true));
console.log(Number.isNaN({}));
console.log(Number.isNaN([1, 2, 3]));

// Number.isFinite - returns true if the passed value is a finite number.
// Note: anything else, booleans, strings, objects, arrays, return false
console.log(Number.isFinite(1));
console.log(Number.isFinite(-25));
console.log(Number.isFinite(0));
console.log(Number.isFinite(0.2));

console.log(Number.isFinite("Flavio"));
console.log(Number.isFinite(true));
console.log(Number.isFinite({}));
console.log(Number.isFinite([1, 2, 3]));

// Number.isInteger - returns true if the passed value is an integer.
// Antthing else, booleans, strings, objects, arrays, return false
console.log(Number.isInteger(1));
console.log(Number.isInteger(-234));
console.log(Number.isInteger(0));

console.log(Number.isInteger(0.2));
console.log(Number.isInteger("Flavio"));
console.log(Number.isInteger(true));
console.log(Number.isInteger({}));
console.log(Number.isInteger([1, 2, 3]));

// Number.parseFloat - parse the argument as a float number and return it. Argument is a string:
console.log(Number.parseFloat("10"));
console.log(Number.parseFloat("10.00"));
console.log(Number.parseFloat("237,21"));
console.log(Number.parseFloat("237.21"));
console.log(Number.parseFloat("12 34 56"));
console.log(Number.parseFloat(" 36 "));
console.log(Number.parseFloat("36 is my age")); //36

console.log(Number.parseFloat("-10"));
console.log(Number.parseFloat("-10.2"));

console.log(Number.parseFloat("I am Flavio and I am 36"));

console.log(Number.parseInt("10", 10));
console.log(Number.parseInt("010"));
console.log(Number.parseInt("10", 8));
console.log(Number.parseInt("10", 16));
