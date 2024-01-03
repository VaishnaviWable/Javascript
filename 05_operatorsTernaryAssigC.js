var maleMarriageEligibility=function(gender,age,boyName){
    var result= gender=="Male" && age>=21 ? `Hey ${boyName} you are eligibile for Marriage.`:  `${boyName} you are not eligible for Marriage.` ;
    console.log(result);

}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log("--------------step 2---------------")

var femaleMarriageEligibility=function(gender , age,girlName){
    var result= gender=="Female" && age>=18 ? `Hey ${girlName} you are eligibile for Marriage.`:  `${girlName} you are not eligible for Marriage.` ;

    console.log(result);
}
femaleMarriageEligibility("Female", 16,"Jenifer");
femaleMarriageEligibility("Female", 27,"Malinda Gates");



