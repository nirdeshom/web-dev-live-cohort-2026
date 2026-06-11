Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`)  // function name milega
}

function greet(name){
    return `Hello ${name}`
}

greet.describe()

// function declaration
function add(a, b){
    return a+b;
}

// function expression
let substract = function(a, b){
    return a-b;
}

// Arrow function
const multiply = (a, b) => a*b

// first class function 
function applyOperation(a, b, operation){
    return operation(a, b);
}

let reult = applyOperation(5, 4, (x, y) => x/y)

console.log(reult);


function createCounter(){
    let score = 0
    return function(){
        score++
        return score
    }
}

let counter = createCounter()  // return function
console.log(counter());  // call function

(function(){
    console.log("Hello");
})()