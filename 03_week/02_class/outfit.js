// server call, rainy, cloudy, sunny

let weather = "sunny";

/*
if(condition){
    // condition true hone par ye chalega
} else{
    // condition false hone par ye chalega
}
*/

// nested if else condition
if(weather === "rainy"){
    console.log(`${weather} hai ji umbrela le jao`);
} else if(weather === "cloudy"){
    console.log(`${weather} hai ji jacket le jao`);
} else {
    console.log(`${weather} hai ji mast jao`);
}

console.log(weather === "rainy");  // trure / false
