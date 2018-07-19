var firstName = "default";

function getvalue() {
    var firstName = document.getElementById("firstNameInput").value;
    var userEmail = document.getElementById("InputEmail1").value;

    console.log(firstName);
    console.log(userEmail);

    document.getElementById("ModalLongTitle").innerHTML = "Thank you " + firstName + "!";
    document.getElementById("messageForm").innerHTML = "You'll be receiving an email at " + userEmail + " soon! Be on the look out for emails! Lots of good things to come.";
}