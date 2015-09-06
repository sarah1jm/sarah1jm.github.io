/*block comments*/
//Everything on this line is a comment

function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log('User is called ' + fullName);

	$('h2').text('Hello ' + fullName);

	var userAge

	function checkAge() {
		userAge = prompt('How old are you?');
		userAge = parseInt(userAge);
		if (isNaN(userAge) === true) {
			alert('Please only use numbers');
			checkAge();
	}
	if (userAge < 0) {
		alert('Please enter your real age');
		checkAge();
	}


	if (userAge >= 18) {
		console.log('User is an adult');
	} else if (userAge >= 13) {
		console.log('User is a teenager');
	} else {
		alert('Go away child');
	}
	}

	if (firstName.toLowerCase() =='general' 
		&& lastName.toLowerCase() !='assembly') {
		alert('Hello General');
	}

}		


//When the page loads
$(function() {

	$('img').on('click', askQuestions);
	//hide all the sections
	$('h3').next().hide();

	console.log($('h3').length);

	//When the user clicks an h3 element
	$('h3').on('click', function(){


	//Hide the next element
	$(this).next().slideToggle(1000);
	});
});

