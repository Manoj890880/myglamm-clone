function generator(){
    var number = document.getElementById("number").value
    console.log(number);

    if(number=="") {
        alert("Contact field can't be Empty")
    } 
   if(number != "") {
     window.location.href = "signin.html"
   }
   login()
 }
let close = document.querySelector("#close");
// function otpGEN(){
//   let otp = "";
//   let i = 0;
//   while(i<6) {
//     otp += Math.floor(Math.random() * 10);
//   }
  // login()



document.getElementById("loginBtn")

function login(){
  let x  = 0 ;
let y = 9 ;

let a = Math.floor(x + (y - x) * Math.random());
let b = Math.floor(x + (y - x) * Math.random());
let c = Math.floor(x + (y - x) * Math.random());
let d = Math.floor(x + (y - x) * Math.random());

console.log(a,b,c,d)

let otp = String(a)+String(b)+String(c)+String(d);

localStorage.setItem("otp",JSON.stringify(otp));
console.log(otp)

alert(otp)
window.location.href = "signin.html"

}



// let connect_btn = document.getElementById("connect-btn-id");
// connect_btn.onclick = () =>{
//     otplogin();
// }

// let  otplogin =() =>{
//     let otp = ""
//     // console.log("login page")
//      let num = document.getElementById("otp").value
//      let pin = localStorage.getItem("otp") || "";

//      for(let i=0 ; i<num.length ; i++){
//         otp +=String(num[i])
//      }
//      console.log(`"${otp}"`)

//     if(`"${otp}"` === pin ){
//         alert("Connected To Us Successfully")
//         window.location.href = "profile.html"
//     }
//     else{
//         alert("Invalid OTP")
//     }
// }


