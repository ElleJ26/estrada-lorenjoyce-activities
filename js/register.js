function register() {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var password = document.getElementById("password").value;

    // == value
    // === value and type
    // if (1 === '1')
    // || means or
    if (username === "" || name === "" || gender === "" || password === "" ) {
        document.getElementById("error").innerHTML = "All textboxes are required";
    }

    else {
        document.getElementById("error").innerHTML = "Registered Successfully";
    }
}