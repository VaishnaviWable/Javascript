// console.log("============log first and last element=====");
const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
// console.log(fruits_seasonal.at(0));
// console.log(fruits_seasonal.at(4));

// console.log("<============add element============>");

// fruits_seasonal.unshift("Papaya")
// console.log(fruits_seasonal);

// console.log("<============remove element==========>");

// fruits_seasonal.splice(4,1)
// console.log(fruits_seasonal);

// console.log("============insert element=====");
// fruits_seasonal.splice(6,1,"Pineapple")
// console.log(fruits_seasonal);

// console.log("============insert element dragon fruit=====");
// fruits_seasonal.splice(4,0,"Dragon Fruit")
// console.log(fruits_seasonal);

// console.log("============replace an element=====");
// fruits_seasonal.fill("Kiwi",1,2)
// console.log(fruits_seasonal);

// console.log("============log elements from index 1 to 4 =====");
// const fruits=fruits_seasonal.slice(1,5)
// console.log(fruits);

console.log("============last 3 elements =====");

let fruits=fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(fruits);