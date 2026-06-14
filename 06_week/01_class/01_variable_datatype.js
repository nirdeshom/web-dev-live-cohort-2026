let name = "Nirdesh";
const pi = 3.14;

let number = 1234;  // Number
let text = "Hello";  // String
let isTrue = true;  // Boolean
let nothing = null;  // Object
let undefinedVar = undefined; // undefined
let symbolVar = Symbol();  // Symbol
let bigNumber = 12341234123n;  // BigInt

// console.log(typeof nothing);
// console.log(typeof undefinedVar);
// console.log(typeof symbolVar);

let person = {
    name: "hitesh",
    age: 35,
    isStudent: true,
}

let num = "a22aa";
// let convertNumber = Number(num);  // "12" - 12
// let convertNumber = +num;  // "12abc" - 12
let convertNumber = parseInt(num);  //"a123bc" - NaN

// console.log(convertNumber);
// console.log(typeof convertNumber);

let str = 123;
let convertString = String(str);


let a = 10;
let b = 4;

let add = a + b;
let sub = a - b;
let multiply = a * b;
let divide = a / b;
let remainder = a % b;
let sqar = a ** b;

let x = 10;
let y = 10;

console.log(x == y);  // Equal to
console.log(x != y);  // Not Equal to
console.log(x < y);
console.log(x > y);
console.log(x <= y);

console.log(Math.min(5, 10));
console.log(Math.max(5, 10));
console.log(Math.random() * 10);

let fname = "Nirdesh";
let lname = "Verma";

let fullName = fname + " " +lname;

let message = "Hello World";
let myMessage = new String("Hello World JavaScript")

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());

console.log(myMessage.indexOf('W'));
console.log(myMessage.slice(0, 4));

let myName = "Nirdesh";

let greeting = `Hello ${myName} form chai aur code`;
console.log(greeting);
