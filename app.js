function signUp() {
  var firstname = document.getElementById("firstName").value;
  var lastname = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var dob = document.getElementById("dob").value;

  var output = document.getElementById("para");
  output.innerHTML = "First Name: " + firstname + "<br>Last Name: " + lastname + "<br>Email: "+ email + "<br>Phone Number : " + phone + "<br>Date of birth: "+ dob;
}
