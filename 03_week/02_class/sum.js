let myArray = [1, 2, 4, 6, 5];

function sunFac(number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum = sum + number[i]
        // sum += number[i]
    }
    // sum = 0 + 1 = 1
    // 1 = 1 + 2 = 3
    // 3 = 3 + 4 = 7
    // 7 = 7 + 6 = 13
    // 13 = 13 + 5 = 18

    return sum
}

console.log(sunFac(myArray));

for(let i = 1; i <= 10; i++){
    console.log(i);
}