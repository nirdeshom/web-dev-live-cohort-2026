const student = {
    name: "Nirdeesh",
    age: 23,
    course: "web development",
}

student.email = "n@google.com";
student.age = 25
// delete student.course 

console.log(student.name)
console.log(student["course"]);
console.log(Object.keys(student));
console.log(Object.keys(student).length);
console.log("name" in student);
console.log(student);

for (const key in student) {
    // const element = student[key];
    console.log(student[key]);
    console.log(key);
}

console.log(Object.values(student))
console.log(Object.keys(student))
console.log(Object.entries(student))

const obj2 = {
    ...student,
    profile: "software enginner",
}

console.log(obj2);


const myCard = {
    product: "T-Shirt",
    price: 199,
    colore: ["red", "black"],
}

const updateCard = myCard
updateCard.price = 299;

const updateTwo = {
    ...myCard
}

updateTwo.price = 599;

console.log(myCard);
console.log(updateCard);
console.log(updateTwo);

// Object.freeze(); 
