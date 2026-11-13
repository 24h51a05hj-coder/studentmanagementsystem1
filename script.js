// const msg = document.getElementById("msg");

// function validateEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// function validatePassword(password) {
//     return password.length >= 6;
// }

function submit() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let yearRadio = document.querySelector('input[name="year"]:checked');
    let year = yearRadio ? yearRadio.value : "";

    if (name === "" || email === "" || password === "" || year === "") {
        msg.textContent = "Please fill in all fields.";
        return;
    }
    if (!validateEmail(email)) {
        msg.textContent = "Please enter a valid email address.";
        return;
    }
    if (!validatePassword(password)) {
        msg.textContent = "Password must be at least 6 characters long.";
        return;
    }

    msg.textContent = "Registration successful!";
}