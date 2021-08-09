function compute()
{    
    var principal = Number(document.getElementById("principal").value);

    /* Make sure we have a valid number before proceeding further. 
    Best to check now before trying to use invalid input in a calculation. */
    if (principal <= 0) {
        alert("Enter a positive number.");
        return;
    }

    // To ensure type safety, I've added "Number()" where appropriate
    var rate = Number(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);  
    var interest = Number(principal * years * rate/100);  
    var year = Number(new Date().getFullYear()+parseInt(years)); 

    document.getElementById("result").innerHTML=
    "\<br\>If you deposit \<span class='highlight'>"+principal+"\</span>,\<br\> at an interest rate of \<span class='highlight'>"+rate+
    "%\</span>,\<br\>you will receive an amount of \<span class='highlight'>"+interest+"\</span>,\<br\>in the year \<span class='highlight'>"
    +year+"\</span>\<br\>";

    // All done! Set the focus of the cursor.
    document.getElementById("principal").focus();
};


function updateRate() 
{
    // Update the interest rate on the screen.    
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";    
};
        
