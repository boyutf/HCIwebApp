 
MAX_CONCESSION = 999;
TOTAL_CONCESSIONS = 9;

var currentNumconcessions=0;
var concessionPrices = [1.5, 2.5, 3.5, 1, 2, 3, 2, 4.5, 7];
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var i;
    var totalConcessions;
    var concessionPrice = 0;
    for (i = 1; i <= TOTAL_CONCESSIONS; i++)
    {
       if (isNaN(parseInt(document.getElementById( "concession"+i ).value)))
       {
          document.getElementById( "concession"+i ).value=0;
       }
    }
    for (i = 1; i <= TOTAL_CONCESSIONS; i++)
    {
       if (isNaN(parseInt(document.getElementById( "concession"+i ).value)))
       {
          totalConcessions += parseInt(document.getElementById( "concession"+i )).value;
       }
    }
    
    if (totalConcessions > MAX_CONCESSION)
    {
       var divobj = document.getElementById('totalPrice');
       divobj.style.display='block';
       divobj.innerHTML = "Please select a total of "+MAX_CONCESSION+" concessions or less.";
       document.getElementById("totalPrice").style.backgroundColor = "#f00";
       currentNumconcessions = 0;
    }
    else
    {
       currentNumconcessions = totalConcessions;
       for (i = 1; i <= TOTAL_CONCESSIONS; i++)
       {
          concessionPrice += parseInt(document.getElementById( "concession"+i ).value)*concessionPrices[i-1];
       }
       concessionPrice = concessionPrice.toFixed(2);
       
       //display the result
       var divobj = document.getElementById('totalPrice');
       divobj.style.display='block';
       divobj.innerHTML = "Total Price $"+concessionPrice;
    }
    if ( (currentNumconcessions => 0))
    {
       document.getElementById("next").disabled = false;
    }
    else
    {
       document.getElementById("next").disabled = true;
    }

}

function add(num)
{
   var numconcessions = parseInt(document.getElementById( "concession"+num ).value) + 1;
   document.getElementById( "concession"+num ).value = numconcessions;
   calculateTotal();
}

function subtract(num)
{
   var numconcessions = parseInt(document.getElementById( "concession"+num ).value) - 1;
   if (numconcessions < 0)
   {
      numconcessions = 0;
   }
   document.getElementById( "concession"+num ).value = numconcessions;
   calculateTotal();
}
