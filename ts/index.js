"use strict";
var names = document.getElementById("names");
var email = document.getElementById("email");
var rating = document.getElementById("rating");
var reviewMessage = document.getElementById("review");
var error = document.getElementById("error");
var error_message = "Enter all the required fields";
function sendUserData() {
    var form_data = {
        name: names.value,
        email: email.value,
        rating: rating.value,
        review: reviewMessage.value,
    };
    fetch("../php/review.php", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        method: "POST",
        body: JSON.stringify(form_data),
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
        .then(function (data) {
        if (data.status === "success") {
            window.location.href = "/review-project/php/review.php";
        }
        else {
            error.innerHTML = data.message;
        }
    })
        .catch(function (err) {
        console.log(err);
        error.innerHTML = "An error occurred while sending the data.";
    });
}
function validateEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
var validate = function (event) {
    event.preventDefault();
    error.innerHTML = "";
    if (names.value.length < 5 ||
        (email === null || email === void 0 ? void 0 : email.value) === "" ||
        (rating === null || rating === void 0 ? void 0 : rating.value) === "Select rating" ||
        reviewMessage.value.length < 5) {
        error.innerHTML = error_message;
    }
    else if (!validateEmail(email.value)) {
        error.innerHTML = "Enter a valid email address";
    }
    else {
        sendUserData();
    }
};
var submitButton = document.querySelector(".primary-BTN");
submitButton.addEventListener("click", validate);
