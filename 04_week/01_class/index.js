const person = {
    x: 10,
    firstName: "Nirdesh",
    lastName: "Kumar",
    hobbies: ["Coding", "Gym"],
    isMarried: false,
    hasGf: false,
    hadGf: false,
    hadCrash: Infinity,

    getFullName: function(){
        return "Nirdesh Kumar";
    },

    address: {
        hno: 1,
        street: 2,
        countryCode: "IN",
        state: "UP",
    }
}

console.log(person);
console.log(person.lastName);
console.log(person.getFullName());
console.log(person.address);
console.log(person.address.state);

const remote = {
    color: 'black',
    brand: 'xyz',
    dimension: {height: 1, wiedth: 2},

    turnOf: function(){

    },

    volumeUp: function(){

    }
}

console.log(remote);
