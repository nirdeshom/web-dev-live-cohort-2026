// Number 
let score = 123;
let myScore = new Number(123.4444);

console.log(typeof score);  // number
console.log(typeof myScore);  // object

console.log(score.toString().length);  // 3
console.log(score.toFixed(2));  // Decimal places fix karne ke liye.
console.log(myScore.toPrecision(5));

/*
Prototype Chain Diagram
const num = 100

num
 │
 ▼
Number.prototype
 │
 ├── toFixed()
 ├── toString()
 ├── toPrecision()
 ├── toExponential()
 │
 ▼
Object.prototype
 │
 ├── hasOwnProperty()
 ├── toString()
 ├── valueOf()
 │
 ▼
null
*/

// Math
console.log(Math.abs(-444));  // negative value convert to positive
console.log(Math.ceil(4.2));  // Number ko hamesha upar round karta hai.
console.log(Math.floor(45.4));  // Number ko hamesha niche round karta hai.

// Nearest Integer
console.log(Math.round(5.4));
console.log(Math.round(5.6));

console.log(Math.trunc(5.44));  // Decimal Hatao
console.log(Math.max(1, 3, 5, 4, 3));  // Sabse Bada
console.log(Math.min(2, 3, 1, 4, 3));  // Sabse Chhota
console.log(Math.pow(2, 3));  // 2 * 2 * 2
console.log(Math.sqrt(25));  // 

console.log(Math.random());  // 0-1

// Real Project Example - Random OTP Generator:
// 1000 se 9999 ke beech 4 digit OTP

let min = 1000;
let max = 9000;

console.log(Math.floor(Math.random() * max) + min);
