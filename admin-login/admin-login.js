let form = document.querySelector("form") 
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  let user = document.getElementById("user").value;
  let password = document.getElementById("pass").value;

  if(user == "admin" && password == "user"){
    window.location.href = "https://hermosa-admin.netlify.app/";
  }
})

