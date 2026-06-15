let obj = {
    name: "Nirdesh",
    greet: function(){
        console.log(`Hello, ${this.name}`);
    }
}


console.log("Hi");

setTimeout(obj.greet.bind(obj), 5 * 1000);

console.log("Bye");
