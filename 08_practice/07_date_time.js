// Date and Time 

let myDate = new Date();

console.log(typeof myDate);  // typeOf: object

console.log(myDate.toString());
console.log(myDate.toDateString());  // Fri Jun 19 2026
console.log(myDate.toLocaleString());  // 6/19/2026, 12:59:46 PM

console.log(myDate.getFullYear());
console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());

console.log(myDate.getTime());

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")

console.log(myCreatedDate.toLocaleString());
