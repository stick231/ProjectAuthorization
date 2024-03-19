let username = "admin";
let password = "password";

document.getElementById('buttonSubmit').addEventListener('click', function(event) {
    event.preventDefault();
    if (validateForm()) {
        let formInput = document.getElementById('FormInput');
        formInput.submit();
        window.location = "file:///D:/Git/ProjectAuthorization/IndexMenu.html"; 
    } else {
        alert('Вы неправильно ввели данные');
    }
});

function validateForm() {
    let usernameInp = document.getElementById("username").value; 
    let passwordInp = document.getElementById("password").value; 
    if (usernameInp.trim() !== username || passwordInp.trim() !== password) {
        return false;
    } else {
        return true;
    }
}