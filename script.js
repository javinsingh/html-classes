function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const Msgbox = document.getElementById('message');

    let message = ' ';
    if (email === ' ') {
        message = 'Please enter your email';
        Msgbox.style.color = 'red';
    }
    else if (password === ' ') {
        message = 'Your password must be 8 characters long';
        Msgbox.style.color = 'red';
    }
    else if (age === ' ') {
        message = 'You must be between the ages 12 and 50';
        Msgbox.style.color = 'red';
    }
    else {
        message = 'You have succesfully logged in';
        Msgbox.style.color = 'green';
    }
    Msgbox.innerText = message;
}