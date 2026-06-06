// Function Declaration

// printChai naam ka function create kya
function printChai(){
    console.log("Hello Chai");
}

// numberOfBrush is a parameter that receives a value when the function is called

function bringBrush(numberOfBrush){
    console.log(`hanji ye aaye ${numberOfBrush} brush`)
}

function addTwo(num1, num2){
    return num1 + num2
}

printChai();
bringBrush(5);  // Argument 5 is passed to the parameter numberOfBrush

addTwo(1, 1);
console.log(addTwo(2, 2));

let result = addTwo(3, 3);  // The returned value is stored in the variable result
console.log("Result:", result);  // Prints the value stored in result
