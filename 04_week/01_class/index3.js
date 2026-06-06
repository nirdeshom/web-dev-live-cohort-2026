let p1 = {
    fname: "Nirdesh",
    lname: "Kumar",
}

let p2 = {
    // fname: p1.fname,
    // lname: p1.lname,

    ...p1,  // spread operator

}

p2.fname = "Hitesh"

console.log(p1);
console.log(p2);
