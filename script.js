function validateForm() {
  let name = document.getElementById("name").value;
  if (name == "") {
    alert("Please enter your name");
    return false;
  }
  alert("Table Booked Successfully!");
  return true;
}