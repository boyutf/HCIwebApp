 
MAX_TICKET = 20;
NUM_SEATS = 25;

var currentNumTickets=0;
var currentNumSeats=0;
var total=0;

NUM_TICKET_OPTIONS=3;
var ticketPrices = [10.5, 8.5, 8.5];

    var a=location.search;
    a=a.replace('%3A',':');
    a=a.replace('+','.');
    a=a.replace('+',' ');
    a=a.replace('+',' ');
    document.write("Your selection is: "+a.substr(5));

function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var i;
    var totalTickets = 0;
    var ticketPrice = 0;
    // Set ticket values to 0 if they are invalid
    for (i = 1; i <= NUM_TICKET_OPTIONS; i++)
    {
       if (isNaN(parseInt(document.getElementById( "ticket"+i ).value)))
       {
          document.getElementById( "ticket"+i ).value=0;
       }
    }
    // Add up total number of tickets
    for (i = 1; i <= NUM_TICKET_OPTIONS; i++)
    {
       totalTickets += parseInt((document.getElementById( "ticket"+i )).value);
    }
    currentNumTickets = totalTickets;
    
    // Tickets selected exceeded max number of seats
    if (totalTickets > MAX_TICKET)
    {
       var divobj = document.getElementById('totalPrice');
       divobj.style.display='block';
       divobj.innerHTML = "Please select a total of "+MAX_TICKET+" tickets or less.";
       document.getElementById("totalPrice").style.backgroundColor = "#f00";
       currentNumTickets = 0;
    }
    
    // Add up the tickets and calculate the total cost
    else
    {
       currentNumTickets = totalTickets;
       for (i = 1; i <= NUM_TICKET_OPTIONS; i++)
       {
          ticketPrice += parseInt(document.getElementById( "ticket"+i ).value)*ticketPrices[i-1];
       }
       ticketPrice = ticketPrice.toFixed(2);
       
       //display the result
       var divobj = document.getElementById('totalPrice');
       divobj.style.display='block';
       divobj.innerHTML = "Total Price $"+ticketPrice;
       if ( ticketPrice == 0)
       {
          document.getElementById("totalPrice").style.backgroundColor = "#f00";
       }
       else
       {
          document.getElementById("totalPrice").style.backgroundColor = "#ff0";
       }
    }
    
    // Enable the "next" button if the number of selected seats and tickets match
    if ( (currentNumTickets > 0) && (currentNumSeats == currentNumTickets))
    {
       document.getElementById("next").disabled = false;
    }
    
    else
    {
       document.getElementById("next").disabled = true;
    }
    selectSeat();
    total=ticketPrice;
}

function add(num)
{
   // The user has clicked the + button, add the corresponding ticket
   var numTickets = parseInt(document.getElementById( "ticket"+num ).value) + 1;
   document.getElementById( "ticket"+num ).value = numTickets;
   calculateTotal();
}

function subtract(num)
{
   // The user has clicked the - button, subtract the corresponding ticket
   var numTickets = parseInt(document.getElementById( "ticket"+num ).value) - 1;
   // Cannot have a negative number of tickets
   if (numTickets < 0)
   {
      numTickets = 0;
   }
   document.getElementById( "ticket"+num ).value = numTickets;
   calculateTotal();
}

function selectSeat()
{
   var seats = document.forms[0];
   var numSeats = 0;
   var diff;
   var txt = "";
   var i;
   // Find out which seats are selected
   for (i = 0; i < seats.length; i++) {
      if (seats[i].checked) 
      {
         numSeats++;
         //txt = txt + seats[i].value + " ";
      }
   }
   currentNumSeats = numSeats;
   
   // Enable the "next" button if the number of selected seats and tickets match
   if ( (currentNumSeats > 0) && (currentNumSeats == currentNumTickets))
   {
      document.getElementById("next").disabled = false;
   }
   else
   {
      document.getElementById("next").disabled = true;
   }
   
   // User must select tickets before selecting seats
   if ( currentNumTickets == 0 )
   {
      document.getElementById("seatTotal").innerHTML = "Please select ticket(s).";
      document.getElementById("seatTotal").style.backgroundColor = "#f00";
   }
   
   // User has selected more seats than tickets
   else if ( currentNumSeats > currentNumTickets )
   {
      diff = currentNumSeats-currentNumTickets;
      document.getElementById("seatTotal").innerHTML = "Please add "+diff+" ticket(s) or remove seat(s).";
      document.getElementById("seatTotal").style.backgroundColor = "#f00";
   }
   
   else
   {
      // Number of tickets equals number of seats
      if (currentNumSeats == currentNumTickets)
      {
         document.getElementById("seatTotal").innerHTML = txt+"Seats selected.";
         document.getElementById("seatTotal").style.backgroundColor = "#ff0";
      }
      // User has not selected enough seats yet
      else
      {
         diff = currentNumTickets-currentNumSeats;
         document.getElementById("seatTotal").innerHTML = txt + "Please select "+diff+" seat(s).";
         document.getElementById("seatTotal").style.backgroundColor = "#f00";
      }
   }
}

function autoSelectSeats()
{
   var seats = document.forms[0];
   var numSeats = 0;
   var diff;
   var txt = "";
   var i;
   // Calculate which seats are selected first
   for (i = 0; i < seats.length; i++) {
      if (seats[i].checked) 
      {
         numSeats++;
         //txt = txt + seats[i].value + " ";
      }
   }
   currentNumSeats = numSeats;
   i = 0;
   // Iterate over the seats sequentially and check ones that have not been checked yet
   while (currentNumSeats < currentNumTickets)
   {
      if ( (seats[i].checked == false) && (seats[i].disabled == false) && (seats[i].type == "checkbox") )
      {
         seats[i].checked = true;
         currentNumSeats++;
      }
      i++;
   }
   selectSeat();
}


function move(){

  window.location.href = "ticket-seat-selection.html";
}

function foo(){ 
  
        var str = total;
        var frm = window.event.srcElement; 
        frm.hid.value = str; 
        return true; 
 }
