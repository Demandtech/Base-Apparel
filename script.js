let form = document.querySelector('form');


form.addEventListener("submit", function(e){
 e.preventDefault();
 
 var email = document.getElementById("email");
 var text = document.getElementById("error-msg");
 var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 var errorImage = document.getElementById("error-img");

  if(pattern.test(email.value)){
    email.style.borderColor = "green";
    errorImage.style.display = "none";
    text.innerHTML = "";
    return true
  }
  else{
   text.innerHTML = "please provide a valid email";
   errorImage.style.display = "block";
   email.style.borderColor = "red";
   return false
  }
})