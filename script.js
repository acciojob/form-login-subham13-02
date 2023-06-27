document.getElementById("form1").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;

  // Display the first and last name using alert()
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
});
