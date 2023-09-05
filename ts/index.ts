"use strict";

const names = document.getElementById("names") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const rating = document.getElementById("rating") as HTMLSelectElement;
const reviewMessage = document.getElementById("review") as HTMLTextAreaElement;
const error = document.getElementById("error") as HTMLParagraphElement | any;
const error_message: String = "Enter all the required fields";


interface IFormData {
  name?: string,
  email?: string,
  rating?: string,
  review?: string
}

function sendUserData(): void {

  const form_data: IFormData = {
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
    .then((response: any) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: any) => {
      if (data.status === "success") {
        window.location.href ="/review-project/php/review.php";
      } else {
        error.innerHTML = data.message;
      }
    })
    .catch((err: any) => {
      console.log(err)
      error.innerHTML = "An error occurred while sending the data.";
    });
}

function validateEmail(email: any): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

const validate: (event :any) => void = (event: any) => {
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

const submitButton = document.querySelector(".primary-BTN") as HTMLButtonElement;
submitButton.addEventListener("click", validate);
