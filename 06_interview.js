var interviewEligibility=function(gradScore,hscScore,sssScore,candidateName){
   if(gradScore>=70 || hscScore>=80 || sssScore>90){
    console.log(`${candidateName} you are eligible for TCS interview `)
   }else{
    console.log(`${candidateName} unfortunately you are not eligible for TCS interview `)

   }
}
interviewEligibility(80,86,90, "Vaishnavi");
interviewEligibility(70,65,55, "Neha");
interviewEligibility(60,79,88, "Saloni");