let arr = [1, 2, 3, 4, 5];
let returnArray = arr.map( (currentValue, index, array) => {
    return currentValue + 1
} )
// console.log(returnArray);

let obj = [
    {name: "nirdesh", age: 21},
    {name: "omjeet", age: 23},
    {name: "vk", age: 27},
]
obj.map((currVal, i, o) => {
    // console.log(currVal, i, o)
    // console.log(currVal.age + 1);
})

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFun){
        let value = []
        for(let i = 0; i < this.length; i++){
            let reult = userFun(this[i], i)
            value.push(reult)
        }
        return value
    }
}

let myArr = [1, 2, 3, 4, 5];
let retArray = myArr.myMap( (item) => {
    return item * 2;
})

console.log(retArray);
