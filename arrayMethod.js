// Map Method
const myArray = [10, 20, 30, 40, 50];

const myFun = (numbers) => {
  return numbers * 10;
};
let newArray = myArray.map(myFun);
console.log(newArray);
// forEach Method
const fruitsList = ["Apple", "Banana", "Grapes", "Strawberry"];
const showFruits = (fruits) => {
  console.log(fruits);
};
fruitsList.forEach(showFruits);
// Filter Method
let ageOfPerson = [22, 18, 19, 45,12];
let checkAdult = (age) => {
  return age >= 18;
};
let adult=ageOfPerson.filter(checkAdult);
console.log(adult);

// Find Method

