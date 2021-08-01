const inputs = document.querySelectorAll(".input");
function addcl(){
    
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
var logemail=document.getElementById("email");

  var passlog=document.getElementById("password");
  
   
  function finalvalidate()
  {
	valid=true;
	  if(document.admin.Email.value=='' || document.admin.Password.value=='' || (logemail.value.match(pat1)==null) || (passlog.value.length!=3) || passlog.value.match("Admin")==null)
	 {
	      alert("Enter Corrected Details");
				   return false;
	 }
	  else
	  {
		alert("Successfull Login");
		 return true;
	  }
	 }
 