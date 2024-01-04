var marriageEligibility=function(gender , age){
    if(age==undefined || age<0 || gender==undefined || isNaN(age)){
        console.log(`${age} Invalid input `)
    }else if (gender==='Female' && age>=18) {
        console.log(`${gender}, ${age} ====>You are eligible for marriage.`)

    }else if(gender==='Male' && age >=21){
        console.log(`${gender}, ${age}====> You are eligible for marriage.`)
    }else {
        console.log(`${gender}, ${age}===> You are not elogible for marriage`)
    }
}
marriageEligibility('Male',17);
marriageEligibility('Male',25);
marriageEligibility('Female',28);
marriageEligibility('other',35);
marriageEligibility('other',41);
marriageEligibility('Female',16);