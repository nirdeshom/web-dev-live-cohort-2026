function prepareChai(type) {
  if (type === "Masala Chai") {
    console.log("Adding spices to the chai");
  } else {
    console.log("Preparing regular chai");
  }
}

prepareChai("Masala Chai");
prepareChai("Ginger Chai");

/*
Ek online store mein, agar customer ka total bill amount 1000 se zyada hai, toh 10% discount milta hai. Nahi toh, full amount pay karna padta hai.

*/

function calculateTotal(amount){
    // convert to number 
    let valueNumber = Number(amount);
    // if(valueNumber > 1000){
    //     return valueNumber * 0.9;
    // } else{
    //     return valueNumber;
    // }

    return valueNumber > 1000 ? valueNumber * 0.9 : valueNumber
}

const finalBill = calculateTotal("1200");
console.log(finalBill);
console.log(calculateTotal(500));

/*
Ek traffic light system mein, agar light "red" hai, toh "Stop" print karo. Agar "yellow" hai, toh "Slow down" print karo. Agar "green" hai, toh "Go" print karo.

*/

function trafficLight(color){
    switch (color) {
        case "red":
            console.log("Stop");
            break;
        case "yellow":
            console.log("Slow Down");
            break;
        case "green":
            console.log("Go");
            break;
        default:
            console.log("Chalan kaat do");
            break;
    }
}

trafficLight("yellow");

function checktruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

checktruthyValue(1)
checktruthyValue(0)
checktruthyValue("hitesh")
checktruthyValue("")
checktruthyValue([])
checktruthyValue([1, 2, 3])
checktruthyValue({})
checktruthyValue({name: "hitesh"})

function login(username, password, loginIp){
    if(username === "admin" && (password === "1234" || loginIp === "123")){
        console.log("User Login Successful");
    } else {
        console.log("Invalid Credentials");
    }
}
login("admin", "1234");
