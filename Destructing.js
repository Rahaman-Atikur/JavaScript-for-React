// Array Destructuring
let personName = ["Atik", "Shuvo", "Trisha"];
let [ok, nice] = personName;
// console.log(ok);

// Object Destructuring
let humanBeing = {
  name: "Atik",
  sex: "Male",
  age: 43,
};
let { name: newName } = humanBeing;
console.log(newName);

let objectNotation = JSON.stringify(humanBeing);
console.log(objectNotation);

let reverseObject = JSON.parse(objectNotation);
console.log(reverseObject);

// truthy and falsy value
if (1) {
  console.log("Everything is fine");
}
// Ternary Operator
let number = 0;
let result =
  number >= 10 && number < 20 ? "Condition fulfilled" : "Nothing happens";
console.log(result);

let isActive = true;
const showUser = () => {
  console.log("show user green");
};
const hideUser = () => {
  console.log("Hide user red");
};
// if (isActive == true) {
//   showUser();
// } else {
//   hideUser();
// }
isActive ? showUser() : hideUser();
// Local Storage
