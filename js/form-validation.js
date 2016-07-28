/*
	mocha test/unit.js --opts mocha.opts
*/

function restartForm()
{   console.log("");
	var labelErrorsForm = document.getElementsByClassName("label-error");
	for(var i = 0; i < labelErrorsForm.length; i++)
	{
		labelErrorsForm[i].classList.add("hide");
	}
	
	var inputErrorsForm = document.querySelectorAll("input[type=text]");
	for(var i = 0; i < inputErrorsForm.length; i++)
	{
		inputErrorsForm[i].classList.remove("required");
	}
	
	document.getElementById("form-cake").reset();	
}

function validateForm() 
{
	checkName();	
	checkEmail();
	checkCelebrationType();
}

function checkName()
{
	var name = document.getElementById("name"); 
	if (name.value == "")
	{	
		name.classList.add("required");
		document.getElementById("name-error").classList.remove("hide");			
	}
	else 
	{ 
		name.classList.remove("required"); 
		document.getElementById("name-error").classList.add("hide");
	}	
}

function checkEmail()
{
	var email = document.getElementById("email"); 
	var regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (regExp.test(email.value))
	{	
		email.classList.remove("required"); 
		document.getElementById("email-error").classList.add("hide");
	}
	else 
	{ 
		email.classList.add("required");
		document.getElementById("email-error").classList.remove("hide");
	}	
} 

function checkCelebrationType()
{
	if (!isCheckedCelebrationType())
	{
		document.getElementById("celebration-error").classList.remove("hide");
	}
	else
	{
		document.getElementById("celebration-error").classList.add("hide");
		document.getElementById("other-text").classList.remove("required");
		document.getElementById("other-text-required").classList.add("hide");
		
		if(document.getElementById("other-celebration").checked) {
			if (document.getElementById("other-text").value == "")
			{
				document.getElementById("other-text").classList.add("required");
				document.getElementById("other-text-required").classList.remove("hide");
			}
			else
			{
				document.getElementById("other-text").classList.remove("required");
				document.getElementById("other-text-required").classList.add("hide");
			}
		}
	}
}

function isCheckedCelebrationType()
{
	 var radios = document.getElementsByName("celebration");
	 for (var i = 0, len = radios.length; i < len; i++) {
		  if (radios[i].checked) {
			  return true;
		  }
	 }
	 return false;
}