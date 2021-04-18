function formConfirmation() {
    var bphomeNumber = document.SignUpForm.PhoneNumber;
    var cAge = document.SignUpForm.Age;
    var dGenderM = document.SignUpForm.m;
    var dGenderF = document.SignUpForm.f;
    var eEmail = document.SignUpForm.Email;
    var fPassword = document.SignUpForm.Password;
    var gConfirmPassword = document.SignUpForm.ConfirmPassword;
    var hName = document.SignUpForm.Name;
    var iCity = document.SignUpForm.City;

    // applying nested if loops for proceeding further to get everything checked

    if(confirmName(hName)){
        if (confirmAge(cAge)) {
            if (confirmGender(dGenderM, dGenderF)) {
                if(confirmCity(iCity)){
                    if (confirmPhoneNumber(bphomeNumber)) {
                        if (confirmEmail(eEmail)) {
                            if (confirmPassword(fPassword)) {
                                if (confirmConfirmPassword(fPassword, gConfirmPassword)) {
    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function confirmName(hName){
    var dummyName = /^[A-Z|a-z|\s|\'\.?]{2,}$/gm;
    if (hName.value.match(dummyName)) {
        return true;
    }
    else {
        alert('Please provide a Valid Name');
        return false;
    }
}

function confirmAge(cAge) {
    var ageNum = /^\d{1,100}$/gm;
    if (cAge.value.match(ageNum)) {
        return true;
    }
    else {
        alert('Enter a Valid Age');
        return false;
    }
}

function confirmGender(dGenderM, dGenderF) {
    if (dGenderM.checked) {
        dGenderF.checked = false;
        return true;
    }
    else if (dGenderF.checked) {
        dGenderM.checked = false;
        return true;
    }
    else {
        alert('Please select a Valid Option');
        return false;
    }
}

function confirmCity(iCity){
    var dummyCity = /^[A-Z|a-z|\s\.?]{2,}$/gm;
    if (iCity.value.match(dummyCity)) {
        return true;
    }
    else {
        alert('Please provide a valid City');
        return false;
    }
}

function confirmPhoneNumber(bphomeNumber) {
    var phoneNum = /^\+?(91)?(\-|\s)?[6789]\d{9}$/gm;
    if (bphomeNumber.value.match(phoneNum)) {
        return true;
    }
    else {
        alert('Not a Valid Indian Phone Number');
        return false;
    }
}

function confirmEmail(eEmail) {
    var validEmail = /^\w+@.+\.(in|com)$/gm;
    if (eEmail.value.match(validEmail)) {
        return true;
    }
    else {
        alert('Please provide a Valid Email address');
        return false;
    }
}

function confirmPassword(fPassword) {
    var dummyPassword = /\w{8,30}/gm;
    if (fPassword.value.match(dummyPassword)) {
        return true;
    }
    else {
        alert('Please provide a Valid Password 8-30 characters');
        return false;
    }
}

function confirmConfirmPassword(fPassword, gConfirmPassword) {
    if (gConfirmPassword == fPassword) {
        alert('Form Submission Successful!');
        window.location.reload;
        return true;
    }
    else {
        alert('Password does not match');
        return false;
    }
}