// Primitive Types - Numbers

const one = 1;
const minusOne = -1;
const bigNumber = 5354576767321;

// A numbere can be defined using hexadecimal syntax by using the 0x prefix:
const thisIs204 = 0xcc; //
console.log(thisIs204); // will show 204

// we can define decimals too
const someNumber = 0.2;
const pi = 3.14;

console.log(2.2 * 2);
console.log(2.2 * 20);
console.log(2.2 * 200);
console.log(2.2 * 2000);
console.log(2.2 * 20000);

// or
// avoid processing numbers as decimals
console.log(0.1 * 0.1);

// solve with
(0.1 * 10 * (0.1 * 10)) / 100;

// https://stackoverflow.com/questions/39256662/how-to-handle-precision-and-rounding-errors-in-currency/39256914#39256914
