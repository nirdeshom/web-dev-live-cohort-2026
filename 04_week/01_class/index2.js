const p1 = {
    fname: "Nirdesh",
}

const p2 = p1;  // copy by Refrence and original value bhi change ho jayegi
p2.fname = "Hitesh"

console.log(p1);
console.log(p2);
