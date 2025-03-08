import { signUp, logOut, logIn } from "./auth"

const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signUp(firstName, lastName, email, password);

});

const logoutForm = document.querySelector("#logoutForm");
logoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    logOut()
});

const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value
    logIn(email,password)
});