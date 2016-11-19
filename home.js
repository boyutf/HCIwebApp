function myFunction(a) {
    document.getElementById("myDropdown"+a.toString()).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function signup() {
   var person = prompt("Please enter your username", "");
    var email= prompt("Please enter your emailAddress", "");
    if (person != null) {
        document.getElementById("display").innerHTML =
        "Hello " + person +"!"
    }
  
}
var timestore="";
function buy(num){
  var time=document.getElementById("time1").value;
   alert("Are you sure you want to buy movie: "+document.getElementById("Movie"+num.toString()+"title").innerHTML+" at time: "+timestore+"?");
}

function test(time) {
var sub=time.substring(0,1);
timestore=time.substring(1,time.length);
    document.getElementById("result"+sub).value = time.substring(1,time.length);
}

function sign() {
    var person = prompt("Please enter your username", "");
    
    if (person != null) {
        document.getElementById("display").innerHTML =
        "Hello " + person +"!"
    }
}

function sort(){
var x = document.getElementById("type").value;
var y=document.getElementById("genre").value; 
confirm("Want to sort movies by: "+x+" and "+y+"?");
  
}