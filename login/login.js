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


 function sweet(){
  Swal.fire({
    title: 'هل تريد الاستمرار؟',
    icon: 'question',
    iconHtml: '؟',
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
    showCancelButton: true,
    showCloseButton: true
  })
 }

let close = document.querySelector("#close");



