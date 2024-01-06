console.log("==================Print vowels count===============");

let str="I am very good IT developer"
vowelsCount=0;
for (let index = 0; index <str.length+1; index++) {
    let char=str.charAt(index).toLowerCase();
    if (char=='a'|| char=='e'||char=='i'||char=='o'||char=='u') {
        vowelsCount=vowelsCount+1;
        
    }
    
}
console.log(`Vowels count is: ${vowelsCount}`);

console.log("=============Print the sum of cubes of no.===============");


let sum=0;
for (let index = 1; index <=5; index++) {
    sum +=index*index*index;
}
console.log(`Sum of the cubes of numbers is: ${sum}`);

// let string1="Hard work always pays back";
// let string2="Soon I will be UI IT Champ"
// function oddPositionChars(str){
//     let result="";
//     for (let index = 0; index < str.length; index++) {
//         // let char=str.charAtr(index);
//         if(index%2==1 && str[index]!==' '){
//             result +=str.charAt[index];

//         }
//     }
//     console.log(`Odd-positioned characters (exculding spaces): ${result}`)
   
// }
// console.log("String 1:")
// oddPositionChars(string1)

// console.log("String 2:")
// oddPositionChars(string2)

console.log("==================Print odd Postiona char from string===============");


let string1 = "Hard work always pays back";
let string2 = "Soon I will be UI IT Champ";

function oddPositionChars(str) {
    let result = "";
    for (let index = 0; index < str.length; index++) {
        if (index % 2 == 1 && str[index] !== ' ') {
            result += str.charAt(index);
        }
    }
    console.log(`Odd-positioned characters (excluding spaces): ${result}`);
}

console.log("String 1:");
oddPositionChars(string1);

console.log("String 2:");
oddPositionChars(string2);

console.log("==================Print string in reverse===============");

let str1="Hard work always pays back";
let str2="Soon I will be UI IT Champ"
function reverseString(str){
    let result="";
    for (let index = str.length-1; index >=0; index--) {
        // let char=str.charAt(index);
        if(str[index]!==' '){
            result +=str.charAt(index);

        }
    }
    console.log(`String in reverse order(exculding spaces): ${result}`)
   
}
console.log("StringA:")
reverseString(str1)

console.log("StringB:")
reverseString(str2)

