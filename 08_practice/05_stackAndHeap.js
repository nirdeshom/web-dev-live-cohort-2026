// Stack
let name = "Nirdesh";
let changeName = name;
changeName = "Hitesh";  // copy by value and original value change nhi hoti hai

console.log(name);
console.log(changeName);

// Heap
let one = {
    name: "nirdesh",
    age: 23,
    course: "web dev cohort",
    price: 5499,
}

let two = one;
two.course = "Python Cohort";  // because both references point to the same memory location.

console.log('Object one', one);
console.log('Object two', two);

// shallow copy
let personOne = {
    name: "Nirdesh",
    age: 23,
    course: "web dev cohort",
    coursePrice: 100,

    address: {
        houseNo: 10,
        city: "Lmp",
        state: "UP",
    }
}

let personTwo = {
    ...personOne  // Spread operator(...)
}
personTwo.name = "Omjeet";
personTwo.address.city = "Sitapur";

console.log(personOne);
console.log(personTwo);

// address ek nested object hai. Shallow copy nested objects ko copy nahi karti, sirf unka reference copy karti hai.

// Deep Copy
let personThree = structuredClone(personOne);
personThree.name = "Hitesh";
personThree.address.state = "Uttar Pradesh";

console.log(personOne);
console.log(personThree);

// address ek nested object hai. deep copy nested objects ki value copy krta hai, ab original value change nhi hogi.
