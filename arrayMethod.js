const myArray = [10,20,30,40,50];


const myFun=(numbers)=>{
    return numbers*10;
}
let newArray =myArray.map(myFun);
console.log(newArray);