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

function insertRecord(){
  var i = 0;
  var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
   var row = table.insertRow(i);
   var rollNumber = row.insertCell(0);
   var name = row.insertCell(1);
   var email = row.insertCell(2);
   var grade = row.insertCell(3);
   var edit = row.insertCell(4);
   var deleteRecord = row.insertCell(5);
   
   name.innerHTML = document.getElementById("stdName").value;
   rollNumber.innerHTML = document.getElementById("rollno").value;
   email.innerHTML = document.getElementById("stdEmail").value;
   grade.innerHTML = document.getElementById("grade").value;
  i++;
}