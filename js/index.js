"use strict";

  const names = document.getElementById("names");
  const email = document.getElementById("email");
  const rating = document.getElementById("rating");
  const reviewMessage = document.getElementById("review");
  const submitButton = document.querySelector(".primary-BTN");
  const section_data = document.getElementById("section-data")
  const error = document.getElementById("error");
  const error_message = "Enter all the required fields";

  function sendUserData() {
    const form_data = {
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
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
          window.location.href = "/review-project/php/thankyou.php";
        } else {
          error.innerHTML = data.message;
        }
      })
      .catch((err) => {
        error.innerHTML = "An error occurred while sending the data.";
      });
  }

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  const validate = (event) => {
    event.preventDefault();

    error.innerHTML = "";

    if (
      names.value.length < 5 ||
      email?.value === "" ||
      rating?.value === "Select rating" ||
      reviewMessage.value.length < 5
    ) {
      error.innerHTML = error_message;
    } else if (!validateEmail(email.value)) {
      error.innerHTML = "Enter a valid email address";
    } else {
      sendUserData();
    }
  };
  
  submitButton.addEventListener("click", validate);
