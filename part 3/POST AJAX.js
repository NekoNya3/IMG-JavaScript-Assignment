
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
        httpx.open("POST", "https://reqres.in/api/login", true);

        //taken from Mozilla MDN
        httpx.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        httpx.onreadystatechange = function () {
            // console.log(response);
            if (httpx.readyState === XMLHttpRequest.DONE) {
                var status = httpx.status;
                if (status >= 200 && status < 400) {
                    var elements = JSON.parse(httpx.responseText);
                    console.log(elements.data);
                    alert('Login Successful');
                }
                else{
                    alert('Incorrect Login');
                }
            }
            // console.log(httpx.responseText);

        };

        //taken from Mozilla MDN: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send example:POST part
        console.log(`email=${encodeURIComponent(formData.get('email'))}&password=${encodeURIComponent(formData.get('password'))}`);
        httpx.send(`email=${encodeURIComponent(formData.get('email'))}&password=${encodeURIComponent(formData.get('password'))}`);
    }
    else {
        alert('Please provide correct details (password should b/w 8-30 characters');
    }

}

var passwordRegex = /^\w{8,30}$/gm;
var emailRegex = /^[\w\.?]+\@[\w\.?]+\.(in|com)$/gm;

function validateData(fData) {
    const Email = fData.get('email');
    // console.log(Email.match(emailRegex));
    const Password = fData.get('password');
    // console.log(Password.match(passwordRegex));
    return Password !== null && Email !== null && Password.match(passwordRegex) && Email.match(emailRegex);
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