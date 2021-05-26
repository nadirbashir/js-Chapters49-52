function signUp() {
  var firstname = document.getElementById("firstName").value;
  var lastname = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var dob = document.getElementById("dob").value;

  var output = document.getElementById("para");
  output.innerHTML = "First Name: " + firstname + "<br>Last Name: " + lastname + "<br>Email: "+ email + "<br>Phone Number : " + phone + "<br>Date of birth: "+ dob;
}

function expand(){
    var para = document.getElementById("detail");
    para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit iste ad voluptate, aliquam repellat quasi quaerat dolorum? Enim, alias sint! Cumque ex blanditiis ratione ea consequuntur cum, porro sunt.<a href='#' onclick = 'hide()'>see less</a>";
}
function hide(){
    var para = document.getElementById("detail");
    para.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis enim omnis consectetur ut maxime <a href='#' onclick='expand()'>see more</a>"
}