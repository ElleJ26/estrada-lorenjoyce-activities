function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var real_username = "loren";
    var real_password = "12345";

    // == value
    // === value and type
    // if (1 === '1')
    // || means or
    // && means and

    if (username === "" || password === "") {
        document.getElementById("error").innerHTML = "All textboxes are required";
    }
    else {
        document.getElementById("error").innerHTML = "Welcome " + username;
    }

    if (username === real_username && password === real_password) {
        document.getElementById("error").innerHTML = "Welcome " + username;
    }
    else {
        document.getElementById("error").innerHTML = "Invalid username and password";
    }
}

function forgot() {
    alert("You click forgot password");
}