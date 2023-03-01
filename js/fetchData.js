"use strict";


function renderData(user) {
  document.getElementById("name").innerHTML =
    user.name.title + " " + user.name.first + " " + user.name.last;

  document.getElementById("age").innerHTML =
    "<u>Edad</u>: " + user.dob.age + " años";
  document.getElementById("location").innerHTML =
    user.location.city +
    ", " +
    user.location.state +
    ", " +
    user.location.country;
  document.getElementById("email").innerHTML = "<u>Email</u>: " + user.email;
  document.getElementById("phone").innerHTML = "<u>Tel</u>: " + user.phone;
  document.getElementById("profilePicture").src = user.picture.large;
}

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    const userData = data.results[0];
    renderData(userData);
  });


