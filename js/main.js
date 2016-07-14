var formSubmit = document.getElementById('myform');

function submission(prevent) {
    prevent.preventDefault(); //preventing the default of refreshing when submit button is pressed

    var firstName = document.getElementById('firstname').value;
    console.log('The firstName is: ' + firstName);

    var lastName = document.getElementById('lastname').value;
    console.log('The lastName is: ' + lastName);

    var email = document.getElementById('email').value;
    console.log('The email is: ' + email);

    var message = document.getElementById('message').value;
    console.log('The message is: ' + message);
}

formSubmit.addEventListener('submit', submission);
