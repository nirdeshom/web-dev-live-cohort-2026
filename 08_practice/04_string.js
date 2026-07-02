// String

let name = "nirdesh kumar";
let myName = new String('my name is nirdesh');

console.log(typeof name);
console.log(typeof myName);  // typeof object and value array format

// browser aapko String object ke saare methods dikha deta
console.log(Object.prototype);  
console.log(name.__proto__);

// String ki length batata hai.
console.log(name.length);
console.log(myName.length);

// Kisi index ka character deta hai.
console.log(name.charAt(0));  // n
console.log(name.charAt(1));  // i

// Negative indexing
console.log(myName.at(-2));  // string ke last se start hoga

// String Uppercase me convert karta
console.log(myName.toUpperCase());

// String Lowercase me convert karta
console.log(myName.toLowerCase());

// Check karta hai string present hai ya nahi.
console.log(myName.includes('my'));  // true/false

// Character ka position batata hai.
console.log(myName.indexOf('n'));  // 3

let str = "javascript";

// String ka part nikalta hai.
console.log(str.slice(0, 4));  // substring() and slice() same method

let url = 'www.google.com/search-20%omi/nirdesh';

// Value replace karta hai
console.log(url.replace('/', '%'));  // only first value hi replace
console.log(url.replaceAll('/', 'nir@'));

// split() String ko array me convert karta hai.
console.log(myName.split(' '));

let myStr = "    nir@google   ";

// string spaces remove karta
console.log(myStr.trimStart());  // start me remove
console.log(myStr.trimEnd());  // last me remove
console.log(myStr.trim());  // dono side me remove

let fname = "hitesh";
let youtube = "chai aur code";

console.log(`my name is ${fname} and my youtube channel name ${youtube}`);
