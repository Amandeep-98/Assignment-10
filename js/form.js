
window.onload = function () { 
	var passwordField = document.getElementById("password");
	passwordField.onkeyup = function() {
		passwordValidation()
	}

  var form = document.getElementById("formWrap");
  form.addEventListener('submit', (event) => {
      // stop form submission
      event.preventDefault();
      let country = form.elements.country.value
      let success = document.getElementById('formSuccess')
      success.innerHTML = "Welcome amellerman! The country code you selected is " + country
      success.classList.add("success");
      form.reset();

  });
  form.addEventListener("input", function () {
      if(validateForm()){
        document.getElementById("submit").disabled = false;
      }else {
        document.getElementById("submit").disabled = true;
      }
      let success = document.getElementById('formSuccess')
      success.innerHTML = ""
      success.classList.remove("success");
  });

  document.getElementById("submit").disabled = true;
}

function passwordValidation () {
	let isValid = false
  var myInput = document.getElementById("password");
  var passError = document.getElementById("passwordErr");
  if(myInput.value.length < 10) {
  	passError.innerHTML = 'Password length must be between minimum 10 character.'
  } else {
    passError.innerHTML = ''
    isValid = true;
  }
  return isValid;
}

function typeValidation () {
	let isValid = false;
	var termsError = document.getElementById("termsErr");
	if(!document.getElementById('terms').checked) {   
        termsError.innerHTML = "You have not selected terms";
      } else {
    	termsError.innerHTML  = ''
    	isValid = true;
    }
    return isValid;
}

function requiredField(id){
  let element = document.getElementById(id)
  let value = element.value
  let error = ''
  if(element.type.toLowerCase() == 'checkbox' && element.checked !== true){
    error = id + " is required."
    document.getElementById(id+'Err').innerHTML = camelCase(error)
    return false
  } else if (value !== '' && value !== null) {
    document.getElementById(id+'Err').innerHTML = ""
    return true
  } 
   else {
    error = id + " is required."
    document.getElementById(id+'Err').innerHTML = camelCase(error)
    return false
  }
}

function confirmPassword () {
  let password = document.getElementById('password').value
  let confirmPassword = document.getElementById('confirmPassword').value

  if(confirmPassword !== '' && confirmPassword !== null && password !== confirmPassword){
    document.getElementById('confirmPasswordErr').innerHTML = "Confirm Password should match with password."
  }
}


function camelCase(str) {
    const result = str.replace(/([A-Z])/g, " $1");
    const stringResult = result.charAt(0).toUpperCase() + result.slice(1);
    return stringResult
}

function validateForm () {
	let isValid = true


  document.querySelectorAll('.requiredField').forEach(function(element) {
    console.log('required ', requiredField(element.id))
    if(!requiredField(element.id)){
      isValid = false
    }
  });

  confirmPassword()
  passwordValidation()

	return isValid
}
