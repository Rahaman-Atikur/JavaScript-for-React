// Arrow Function
let myFunction = (numOne,numTwo)=>{
    let sum = numOne + numTwo;
    return sum;
}

 console.log(myFunction(12,12));

//  Spread Operator

let arrayOne = [10,20,30,40];
let arrayTwo = [50,60,70,80];

let combineArray = [...arrayOne ,...arrayTwo];
console.log(combineArray);


let myCar = {
    name:"BMW",
    Model: 2011,
    Engine: 2000
}

let latestCar = {
    name: "Toyota",
    Model: 2012,
    Engine: 2500
}

let carUpdated = {...myCar,...latestCar};
console.log(carUpdated);