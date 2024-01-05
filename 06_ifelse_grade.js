var voteEligible=function(age){
    if(age<=0  ||age>130 ){
        console.log(`${age} ===>Invalid data`)
    }else if(age<18){
        console.log(` ${age}====> You are not eligible to vote`)
    }else{
        console.log(`${age} ====> You are  eligible to vote`)
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);