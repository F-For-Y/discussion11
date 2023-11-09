// Challenge2:
// When the box is checked the “Billing Address” shows up in the “Home Address” field 
// When the box is checked you can’t edit the “Home Address” field
function Challenge2(checkbox) {
    if (checkbox.checked) {
        document.getElementById("home").value = document.getElementById("bill").value;
        document.getElementById("home").readOnly = true;
    } 
    else {
        document.getElementById("home").readOnly = false;
    }
}

// Challenge3:
// Both boxes must have radio buttons selected to move on
// If one or both radio buttons isn’t selected create an alert
function Challenge3() {
    var standing = document.getElementsByName("standing");
    var gradDate = document.getElementsByName("gradDate");
    var standingChecked = false;
    var gradDateChecked = false;
    for (var i = 0; i < standing.length; i++) {
        if (standing[i].checked) {
        standingChecked = true;
        }
    }
    for (var i = 0; i < gradDate.length; i++) {
        if (gradDate[i].checked) {
        gradDateChecked = true;
        }
    }
    if (standingChecked && gradDateChecked) {
        return true;
    } else {
        alert("Please select both radio buttons");
        return false;
    }
}
