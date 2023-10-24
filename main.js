document.addEventListener('DOMContentLoaded', function(){
    let password = document.querySelector('#password').value;
    let confirmpassword = document.querySelector('#confirmpassword').value;
    let error = document.querySelector('#error');

    if(password == "" && confirmpassword == ""){
        error.innerHTML="Password is required."
    }
    else if(password !== confirmpassword){
        error.innerHTML = "passwords do not match"
    }
    else if(password === confirmpassword){
        error.innerHTML = ""
    }
})