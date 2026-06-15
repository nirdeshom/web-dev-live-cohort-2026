console.log("Hello form js");

let obj = {
    name: "Nirdesh",
    greet: function(){
        console.log(`Hello, ${this.name}`);
    }
}

setTimeout(obj.greet, 2 * 1000)

console.log('bye bye');
