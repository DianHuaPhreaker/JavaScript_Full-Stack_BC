// functions 

// example of function declaration 
function getData() {
    // do something
}

// invoking the function like this, 
getData();

// Functions can have one or more parameters 

function getData2(color, age){
    // do something
}

console.log(getData('green', 24))


// can also have default values for parameters, in case they are not passed 
function getData3(color = 'black', age = 25){
    // do something
    console.log(color);
    console.log(age);
}

console.log(getData3());


// a function has a return value. By Default a function returns undefined, unless you add a return keyword with a value

function getData4(){
    return 'hi!'
}

// we can assign this value to a variable when we invoke the function 
let result = getData4(); 

console.log(result); // hi!

// to return multiple values, you can return an object, or an array, like this: 
function getData5() {
    return ["Flavio", 37]
}

let [name, age] = getData5();

console.log([name, age]); // ['Flavio', 37]

// functions can be defined inside other functions: 
const getData6 = () => {
    const doSomething = () => {}
    doSomething()
    return 'test'
}

console.log(getData6);