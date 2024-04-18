// 1
function link(){
    var a = "Hello"
    alert(a);
}
// 2
function user(){
    var b = "Thanks For Purchasing From Us!"
    alert(b);
}
// 3
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}
// 5
let counterValue = 0;

function increaseCounter() {
  counterValue++;
  updateCounter();
}

function decreaseCounter() {
  counterValue--;
  updateCounter();
}

function updateCounter() {
  document.getElementById("counter").innerText = counterValue;
}

// cahpter 49-52

// 1
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    var formData = "<h2>Submitted Form Data:</h2>";
    formData += "<p><strong>First Name:</strong> " + firstName + "</p>";
    formData += "<p><strong>Last Name:</strong> " + lastName + "</p>";
    formData += "<p><strong>Email:</strong> " + email + "</p>";
    formData += "<p><strong>Password:</strong> " + password + "</p>";
    
    document.getElementById("formData").innerHTML = formData;
});
// 2
function showFullDetails(){
    var details = "Bank Details: \n"+"Account Title= Hassan Afiridi \n"+"Balance= 1500PKR \n"+"Account No.= 1025-8431-5435-6841-6"
    console.log(details)
}