function signUp() {
  var firstname = document.getElementById("firstName").value;
  var lastname = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var dob = document.getElementById("dob").value;

  var output = document.getElementById("para");
  output.innerHTML =
    "First Name: " +
    firstname +
    "<br>Last Name: " +
    lastname +
    "<br>Email: " +
    email +
    "<br>Phone Number : " +
    phone +
    "<br>Date of birth: " +
    dob;
}

function expand() {
  var para = document.getElementById("detail");
  para.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit iste ad voluptate, aliquam repellat quasi quaerat dolorum? Enim, alias sint! Cumque ex blanditiis ratione ea consequuntur cum, porro sunt.<a href='#' onclick = 'hide()'>see less</a>";
}
function hide() {
  var para = document.getElementById("detail");
  para.innerHTML =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis enim omnis consectetur ut maxime <a href='#' onclick='expand()'>see more</a>";
}

var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
var stdName = document.getElementById("stdName");
var rollno = document.getElementById("rollno");
var stdEmail = document.getElementById("stdEmail");
var stdgrade = document.getElementById("grade");
function insertRecord() {
  // console.log();
  var row = table.insertRow();
  var rollNumber = row.insertCell(0);
  var name = row.insertCell(1);
  var email = row.insertCell(2);
  var grade = row.insertCell(3);
  var edit = row.insertCell(4);
  var deleteRecord = row.insertCell(5);
  name.innerHTML = stdName.value;
  rollNumber.innerHTML = rollno.value;
  email.innerHTML = stdEmail.value;
  grade.innerHTML = stdgrade.value;
  edit.innerHTML = "<button onclick = 'editRecord(this)'>Edit</button>";
  deleteRecord.innerHTML =
    "<button onclick = 'deleteRecord(this)'>Delete</button>";
}
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
function deleteRecord(x) {
  var ind = x.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(ind);
}

function editRecord(x) {
  modal.style.display = "block";
  document.getElementById("updateRollno").value =
    x.parentNode.parentNode.cells[0].innerHTML;
  document.getElementById("updateName").value =
    x.parentNode.parentNode.cells[1].innerHTML;
  document.getElementById("updateEmail").value =
    x.parentNode.parentNode.cells[2].innerHTML;
  document.getElementById("updateGrade").value =
    x.parentNode.parentNode.cells[3].innerHTML;
}
span.onclick = function () {
  modal.style.display = "none";
};
// when user click anywhere windows will close
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
