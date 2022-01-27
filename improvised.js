function userInput(a){
  // USER ENTERS THE DATE OF BIRTH AS INPUT 
    let enterDate=document.getElementById(a).value;
    //console.log(enterDob);
    let objDate=new Date(enterDate);
// EXTRACTING YEAR MONTH AND DATE FROM USER'S DATE OF BIRTH
    const year = objDate.getYear();  
    const month = objDate.getMonth();  
    const date = objDate.getDate();  
return {
   year:year,
   month:month,
   date:date

};
}

function calculateAge()
{    
const dobObj = userInput('dateOfBirth');             //dobObj= date of birth object
const dtcObj = userInput('dateToCompare');           //dtcObj= date to compare object
console.log(dobObj.year);
console.log(dtcObj.year);

// CREATING A letIABLE TO STORE THE OUTPUT(AGE)
    
    let age={}; // To store output in key value pairs
    let ageoutput=""; //To Display the valueon the screen


// FIRST LETS START WITH GET YEAR
    var ageInYear= dtcObj.year-dobObj.year;
// SECONDLY LETS GET MONTH
    if(dtcObj.month >= dobObj.month)
    var ageInMonth=dtcObj.month-dobObj.month;
    else
    {
    ageInYear--;
    var ageInMonth= 12 + dtcObj.month - dobObj.month;
    }
// LASTLY LETS GET THE DATE 
    if (dtcObj.date >= dobObj.date)   
    var ageInDate = dtcObj.date - dobObj.date;  
    else 
    {  
    ageInMonth--;  
    var ageInDate = 31 + dtcObj.date - dobObj.date;  
    }
//group the data in a single vartiable  
    age = {  years: ageInYear,  months: ageInMonth,  days: ageInDate };  

// > 0 means different year, month and date
// = 0 means same year,month, and date 

    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
    ageoutput = age.years + " years, " + age.months + " months, and " + age.days + " days old.";
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    ageoutput = "Only " + age.days + " days old!";
//when current month and date is same as birth date and month
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageoutput = age.years +  " years old. Happy Birthday !!";
    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageoutput = age.years + " years and " + age.months + " months old.";
    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageoutput = age.months + " months and " + age.days + " days old.";
    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageoutput = age.years + " years, and" + age.days + " days old.";
    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
    ageoutput = age.months + " months old.";
//when current date is same as dob(date of birth)
    else ageoutput= "It will be considered as your first day in this world!" ;

   

//display the calculated age
    return document.getElementById("result").innerHTML = ageoutput; 
     
}