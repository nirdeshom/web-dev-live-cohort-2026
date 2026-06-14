let chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "Lemono Tea"];

// console.log(chaiTypes[2]);

// console.log(`Total Chai Type ${chaiTypes.length}`);

chaiTypes.push('Herbal Tea');
const data = chaiTypes.pop();  // return - jo element last me remove hoga

// console.log(data);

let index = chaiTypes.indexOf("Green Tea");
// console.log(index);

if(index !== -1){
    chaiTypes.splice(index, 1);

}
// console.log(chaiTypes);

chaiTypes.forEach((chai, index) => {
    // console.log(`${index + 1}: ${chai}`);
})

let moreChai = ["Oolong Tea", "White Tea"];

let allChaiType = chaiTypes.concat(moreChai);
let newChaiType = [...chaiTypes, "Chamolina Tea"];

// console.log(newChaiType);

let chaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brown sugar",
    spices: ["Daalchini", "Ginger"],
  },
  instruction: "Boil water, add tea leaves, milk, sugar and spices",
};

// console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecepie = {
  ...chaiRecipe,
  instruction: "Boil water, add tea leaves, mil, sugar, spices with some love",
};

// console.log(updatedChaiRecepie);

let { name, ingredients } = chaiRecipe;
let [firstChai, secondChai] = chaiTypes;

console.log(ingredients);
console.log(secondChai);
