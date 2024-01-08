// Gain Access to form elements
const submitButton = document.getElementById('submit');

// Add event listener to submit button
submitButton.addEventListener('click', checkForm);


function checkForm(){
    /*
        In this method check whether name, email, and phone number have input.
        If they are blank turn the fields red.  Otherwise do nothing.
     */
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    if(name.value === ''){
        name.style.backgroundColor = 'red';
    } else{
        name.style.backgroundColor = 'white';
    }
    if(email.value === ''){
        email.style.backgroundColor = 'red';
    } else{
        email.style.backgroundColor = 'white';
    }
    if(phone.value === ''){
        phone.style.backgroundColor = 'red';
    } else{
        phone.style.backgroundColor = 'white';
    }
}