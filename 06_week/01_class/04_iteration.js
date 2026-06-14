let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];

const totalSales = salesData.reduce((acc, sales) => {
    return acc + sales.price
},0)

console.log(totalSales);

// note 
// accumulator: stores the result from previous iterations.
// currentValue: current array element.
// initialValue: starting value for the accumulator.

// Example 2: Find Maximum Value
let number = [1, 3, 5, 3, 9, 6];
let maxValue = number.reduce((acc, currVal) => currVal > acc ? currVal : acc);
console.log(maxValue);

// Items less than 50
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStockItems = inventory.filter((element) => element.stock < 50);
console.log(lowStockItems);

/*
Parameters
element → Current element being processed.
index → Index of the current element (optional).
array → The original array (optional).
*/

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 12 },
  { user: "Charlie", activityCount: 33 },
];
// find most active user

let mostActiveUser = userActivity.reduce((maxUser, user)=>{
    return user.activityCount > maxUser.activityCount ? user : maxUser;
})

console.log(mostActiveUser);
