function calculateAge()
{

// USER ENTERS THE DATE OF BIRTH AS INPUT 
    let enterDob=document.getElementById('dateOfBirth').value;
    //console.log(enterDob);
    let birthDate=new Date(enterDob);
// EXTRACTING YEAR MONTH AND DATE FROM USER'S DATE OF BIRTH
    const year = birthDate.getYear();  
    const month = birthDate.getMonth();  
    const date = birthDate.getDate();  
    


// GETTING CURRENT/TODAY'S DATE FROM THE SYSTEM
    let enterComparisionDate=document.getElementById('dateToCompare').value;
    let comparitionDate= new Date(enterComparisionDate);
// EXTRACTING YEAR MONTH AND DATE FROM THE CURRENT DATE(system)
    const currentYear = comparitionDate.getYear();  
    const currentMonth = comparitionDate.getMonth();  
    const currentDate = comparitionDate.getDate();  


// CREATING A letIABLE TO STORE THE OUTPUT(AGE)
    
    let age={}; // To store output in key value pairs
    let ageoutput=""; //To Display the valueon the screen


// FIRST LETS START WITH GET YEAR
    ageInYear= currentYear-year;
// SECONDLY LETS GET MONTH
    if(currentMonth >=month)
    var ageInMonth=currentMonth-month;
    else
    {
    ageInYear--;
    var ageInMonth= 12 + currentMonth - month;
    }
// LASTLY LETS GET THE DATE 
    if (currentDate >= date)   
    var ageInDate = currentDate - date;  
    else 
    {  
    ageInMonth--;  
    var ageInDate = 31 + currentDate - date;  
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