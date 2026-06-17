if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFun){
        let reult = []
        for(let i = 0; i < this.length; i++){
            let value = userFun(this[i], i);
            reult.push(value)
        }
        return reult;
    }
}

let myArr = [1, 2, 3, 4, 5];
let returnValue = myArr.myMap(function(item){
    return item + 1;
})
console.log(returnValue);
 