// Arrow functions 

function getData() {
    //.. 
}

// to 
() => {

}

// we can assign a regular function to a variable, like this: 
let getData = function getData() {

}

// when we do so, we can remove the name from the function
let getData = function() {

}

// and invoke it usind that variable name 
getdata();

// if the function contains just a single statement, you can omit the curly braces and write all on a single line
const getData2 = () => console.log("Hi");

// parameters are passed in the parentheses: 
const getData = (param1, param2) => 
console.log(param1, param2);

// if you have one parameter, you could omit the parenthesis completely
const getData = param => console.log(parm);