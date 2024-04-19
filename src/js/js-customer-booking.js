function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  // Simple validation
  if (name === "" || email === "" || date === "" || time === "") {
    alert("Please fill in all fields.");
    return false;
  }

  // Additional validation if needed

  // If all validations pass, you can submit the form or perform other actions
  // For example, you might send the form data to a server using AJAX
  // You can also redirect the user to a confirmation page

  alert("Booking successful! Thank you.");
}
