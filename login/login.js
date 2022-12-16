function generator(){
    var number = document.getElementById("number").value
    console.log(number);

    if(number=="") {
        alert("Contact field can't be Empty")
    } 
   if(number != "") {
     window.location.href = "signin.html"
   }
 }

