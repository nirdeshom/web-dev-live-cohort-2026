let arr = [1, 2, 3, 4, 5, 6];

function enableNegIndex(targetArr){
    return new Proxy(targetArr, {
        set(target, prop, value){
            target[prop] = `${value}`
        },
        get(target, prop){
            return target[prop]
        }
    })
}

// const proxyArr = enableNegIndex(arr)
const proxyArr = enableNegIndex([...arr]); 

console.log(`Original Arr`, arr);
console.log(`Proxy Arr`, proxyArr);

proxyArr[1] = 111;

console.log(`Update Arr`, arr);
console.log(`Proxy Arr`, proxyArr);
