function showInputError(input, error){
	//<div class="input-alert" style="display:none"><strong>Username is not valid</strong></div>
	var inputAlert = document.createElement("div");
	inputAlert.className="input-alert";
	inputAlert.style.display="none";
	inputAlert.innerHTML="<strong>"+error+"</strong>";
	
	input.parentNode.appendChild(inputAlert);
	$(inputAlert).fadeIn(400, function(){
		setTimeout(function(){
			$(inputAlert).fadeOut(400,function(){
				input.parentNode.removeChild(inputAlert);
			});
		}, 2000);
	});
}

function isValidUsername(input){
	var usernameTest= /^[a-z0-9_-]{3,16}$/;
	return usernameTest.test(input);
}
function isValidPassword(input){
	var passwordTest = /^[a-z0-9_-]{6,18}$/;
	return passwordTest.test(input);
}
function isValidEmail(input){
	var mailTest = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	return mailTest.test(input);
}
function isValidUrl(input){
	var urlTest = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
	return urlTest.test(input);
}

function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}