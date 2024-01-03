console.log("-------------------step1-----------------")
var isEvenOrOddNum= function(num){
    if(num%2==0){
        return"Even";
    }else{
        return"Odd";
    }
};
var result=isEvenOrOddNum(45);
console.log(`45 is ${result}`);

var result=isEvenOrOddNum(70);
console.log(`70 is ${result}`);

var resuit=isEvenOrOddNum(67);
console.log(`67 is ${result}`);

var result=isEvenOrOddNum(98);
console.log(`98 is ${result}`);

console.log("-------------------step2-----------------")


var isEligibleForVote=function(age){
if(age>=18){
    console.log(`${age} is Eligible for voting`)
}else{
    console.log(`${age} Not eligible for voting`)
}
}
isEligibleForVote(18)
isEligibleForVote(20)
isEligibleForVote(17)
isEligibleForVote(40)

console.log("-------------------step3-----------------")

var checkString=function(str){
    return str.length>10;
}

var inputstring="Javascript-ES6"
var result=checkString(inputstring)
    if(result){
        console.log(`String contains more than 10 characters`)
    }else{
        console.log(`String contains less than 10 characters`)

    }


console.log("-------------------step4-----------------")


// checkString(JavaScript- ES6)

// var isEvenOrOdd = function(number) {
//     if (number % 2 === 0) {
//       return 'even';
//     } else {
//       return 'odd';
//     }
//   };
  
//   // Numbers to check
//   var numbersToCheck = [45, 70, 67, 48];
  
//   // Check and display the result for each number
//   numbersToCheck.forEach((number) => {
//     console.log(`${number} is ${isEvenOrOdd(number)}.`);
//   });

var checkStart=function(word){
    if(word.startsWith("Java")){
        console.log(`Given Word ${word}, starts with "java"`)
    }

}
checkStart("JavaScript Language")