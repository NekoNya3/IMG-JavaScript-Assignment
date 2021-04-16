
window.addEventListener('keydown', e => {
    console.log(e.code);
    if (e.code === 'Enter') {
        console.log('enter pressed');
        formSubmission();
    }
});

function formSubmission() {

    // confirmation();
    const FormElements = document.getElementById('SignInForm');
    const formData = new FormData(FormElements);
    if (validateData(formData)) {
        var httpx = new XMLHttpRequest();
        httpx.onreadystatechange = function(response){
            console.log(response);
        };
        httpx.open("POST", "https://reqres.in/api/login", true);

    }
    else {
        alert('Please provide correct details');
    }

}

var passwordRegex = /\w{8,30}/gm;
var emailRegex = /^\w+@.+\.(in|com)$/gm;

function validateData(fData) {
    const Email = fData.get('email');
    const Password = fData.get('password');
    return Password.match(passwordRegex) && Email.match(emailRegex);
}

// function passwordConfirmation(){
//     var password = document.SignInForm.Password;
// var validPassword = /\w{8,30}/gm;


// if(password.value.match(validPassword)){
//     return true;
// }
// else{
//     alert('Enter a valid Email address');
//     return false;
// }
// }
// function confirmation(){
//     var email = document.SignInForm.Email;
//     var validEmail = /^\w+@.+\.(in|com)$/gm;
//     if(email.value.match(validEmail)){
//         return true;
//     }
//     else{
//         alert('Enter a valid Email address');
//         return false;
//     }
// }