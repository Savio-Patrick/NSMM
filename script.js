function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Username and password are required!");
        return false; // prevent form submission
    }

    // You can add more complex validation logic here if needed

    return true; // allow form submission
}
function validateForm() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (fullname.trim() === "" || email.trim() === "" || username.trim() === "" || password.trim() === "") {
        alert("All fields are required!");
        return false; // prevent form submission
    }

    // You can add more complex validation logic here if needed

    return true; // allow form submission
}
