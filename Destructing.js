// Array Destructuring
let personName = ["Atik", "Shuvo", "Trisha"];
let [ok,nice] = personName;
// console.log(ok);

// Object Destructuring
let humanBeing = {
    name: "Atik",
    sex:"Male",
    age:43
};
let {name:newName}=humanBeing;
console.log(newName);

let objectNotation = JSON.stringify(humanBeing)
console.log(objectNotation);

let reverseObject = JSON.parse(objectNotation);
console.log(reverseObject);

// truthy and falsy value 


// Local Storage
   
