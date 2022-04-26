document.write("<h1>Loan Service</h1><hr/>")
var age = parseInt(prompt ("Enter Your Age"))
var gender = prompt("Enter Your gender")
var assets =  parseInt (prompt ("Enter Assets"))

if ((age >= 25 && age <= 30 ) && (gender == "Male") && (assets >5000)) {
  document.write ("<h3>You are eligible For Rs. 250000</h3>")  
}
else if ((age >= 23 && age <= 30 ) && (gender == "Female") && (assets >4000)) { 
    document.write ("<h3>You are eligible For Rs. 200000</h3>")  
}

else if ((age >= 16 && age <= 25 ) && (gender == "Male") && (assets >2000)) { 
    document.write ("<h3>You are eligible For Rs. 200000</h3>")  
}

else if ((age >= 16 && age <= 22 ) && (gender == "Female") && (assets >2000)) { 
    document.write ("<h3>You are eligible For Rs. 200000</h3>")  
}


else{
    document.write ("<h3>You Not are eligible For Rs. 250000</h3>")  
}


var hardness = parseInt(prompt("Enter steel Hardness" ))
var carbon = parseFloat(prompt("Enter Carbon"))
var tensile = parseInt(prompt("Enter Tensile"))

if (hardness >= 50 && (carbon < 0.7) && (tensile > 5600)) {
    document.write ("<h3>A+</h3>")
}

else if ((hardness >= 50 && (carbon < 0.7))) {
    document.write ("<h3>B</h3>")
}


else if ((carbon < 0.7) && (tensile > 5600)) {
    document.write ("<h3>C</h3>")
}

else {
    document.write ("<h3>D</h3>")
}




var late = parseInt(prompt("How many days you are late ?"))

if ( late >= 1 && (late <= 5)) {
    document.write ("Pay 50 paise Fine")
}
else if (late >= 6 && (late <= 10)) {
    document.write ("Pay Rs 1  Fine")
}

else if ( late < 10) {
    document.write ("Pay Rs 5  Fine")
}

else if ( late >= 30) {
    document.write ("Your membership is Cancelled")
}

else {
    document.write ("Invalid")

}


