const submitButton = document.querySelector('.submit');
const form = document.querySelector('.form');
const firstName = document.querySelector('.fn-label');
const lastName = document.querySelector('.ln-label');
const emailAddress = document.querySelector('.ea-label');
const regexPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const password = document.querySelector('.pw-label');
let alreadyClicked = false;

//submit button checks for errors
submitButton.addEventListener('click', e => {
    if (firstName.value === '') {
        firstName.classList.add('error'); //adds red box to firstname input area
        document.querySelector('.fn-label-error').classList.add('error'); //add the image and text
        e.preventDefault(); 
    } else {
        firstName.classList.remove('error')
        document.querySelector('.fn-label-error').classList.remove('error');
    }
    if (lastName.value==='') {
        lastName.classList.add('error');
        document.querySelector('.ln-label-error').classList.add('error');
        e.preventDefault(); 
    } else {
        lastName.classList.remove('error')
        document.querySelector('.ln-label-error').classList.remove('error');
    }

    if (!emailAddress.value.match(regexPattern)) {
        emailAddress.classList.add('error');
        document.querySelector('.ea-label-error').classList.add('error');
        e.preventDefault();  
    } else {
        emailAddress.classList.remove('error')
        document.querySelector('.ea-label-error').classList.remove('error');
    }
    if (password.value === '') {
        password.classList.add('error'); 
        document.querySelector('.password-error').classList.add('error'); 
        e.preventDefault(); 
    } else {
        password.classList.remove('error')
        document.querySelector('.password-error').classList.remove('error');
    }
});

//
function clicked () {
    alreadyClicked = !alreadyClicked
}

submitButton.addEventListener('click', clicked )


form.addEventListener('input', e => {
        if (firstName.value === '' && alreadyClicked==true) {
            firstName.classList.add('error'); //adds red box to firstname input area
            document.querySelector('.fn-label-error').classList.add('error'); //add the image and text
            e.preventDefault(); 
        } else {
            firstName.classList.remove('error')
            document.querySelector('.fn-label-error').classList.remove('error');
        }
        if (lastName.value==='' && alreadyClicked==true) {
            lastName.classList.add('error');
            document.querySelector('.ln-label-error').classList.add('error');
            e.preventDefault(); 
        } else {
            lastName.classList.remove('error')
            document.querySelector('.ln-label-error').classList.remove('error');
        }
        if (!emailAddress.value.match(regexPattern) && alreadyClicked==true) {
            emailAddress.classList.add('error');
            document.querySelector('.ea-label-error').classList.add('error');
            e.preventDefault();  
        } else {
            emailAddress.classList.remove('error')
            document.querySelector('.ea-label-error').classList.remove('error');
        }   
        if (password.value === '' && alreadyClicked==true) {
            password.classList.add('error'); 
            document.querySelector('.password-error').classList.add('error'); 
            e.preventDefault(); 
        } else {
            password.classList.remove('error')
            document.querySelector('.password-error').classList.remove('error');
        }
    });
