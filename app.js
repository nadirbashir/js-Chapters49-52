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
  // console.log();
  var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
   var row = table.insertRow();
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
   edit.innerHTML = "<button onclick = 'editRecord(this)'>Edit</button>";
   deleteRecord.innerHTML = "<button onclick = 'deleteRecord(this)'>Delete</button>";
}
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
function deleteRecord(x){
  var ind = x.parentNode.parentNode.rowIndex;
   document.getElementById("myTable").deleteRow(ind);
}

function editRecord(){
  modal.style.display = 'block';
}
span.onclick = function() {
  modal.style.display = "none";
}
// when user click anywhere windows will close
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}