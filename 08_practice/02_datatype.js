// DataType

let name = "Nirdesh";  // String - "", '', ``
let age = 23;  // Number
let isLogin = true;  // Boolean - true/false
let isTemp = null;  // Object
let city;  // undefined
let score = 123412341234n;  // BigInt
let id = Symbol('123');  // Symbol - Unique values

let myArray = [1, 2, 3, "Nirdesh", true];

let myObject = {
    name: "Nirdesh",
    age: 23,
    skills: ["html", "css", "javascript"],
}

function greet(){
    console.log("Hello JavaScript");
}

console.log(typeof (greet));

/*
Data Type batata hai ki variable ke andar kis type ka data store hai.

datatype 2 type ke hote hai

Primitive => Number, BigInt, String, Boolean, null, undefined, symbol
Non-Primitive (Reference) => Array, Object, Function

typeOf
null = object
undefined = undefined
Array = object
object = object
function = function

*/
