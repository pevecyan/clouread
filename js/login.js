$(function() {
	$("#LoginSubmit").on('click',validateLoginForm);
	$("#RegistrationSubmit").on('click',validateRegistrationForm);
});

function validateLoginForm(){
	if(!isValidUsername($("#LoginUsername")[0].value)){
		showInputError($("#LoginUsername")[0],"Username is not valid!");
	}else if(!isValidPassword($("#LoginPassword")[0].value)){
		showInputError($("#LoginPassword")[0],"Password is not valid!");
	}else{
		//Successful
		window.location="home.html";
	}
}

function validateRegistrationForm(){
	if(!isValidUsername($("#RegistrationUsername")[0].value)){
		showInputError($("#RegistrationUsername")[0], "Username is not valid!")
	}else if(!isValidEmail($("#RegistrationEmail")[0].value)){
		showInputError($("#RegistrationEmail")[0], "E-Mail is not valid!")
	}else if(!isValidPassword($("#RegistrationPassword")[0].value)){
		showInputError($("#RegistrationPassword")[0], "Password is not valid!")
	}else if($("#RegistrationPassword")[0].value != $("#RegistrationPasswordConfirm")[0].value){
		showInputError($("#RegistrationPasswordConfirm")[0], "Passwords are not the same!")
	}else{
		//Successful
		window.location="home.html";
	}
}
