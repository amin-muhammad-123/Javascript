var no_of_course = parseInt(prompt("Enter No of courses: "))
var coursefees = 0
var totalfees = 0
if (no_of_course >=3 && no_of_course<7 ) {
    coursefees = 18000*no_of_course
    totalfees = coursefees
    var library = prompt("Do You want to take library membership")
    var sports = prompt("Do You want to take sports membership")
    var canteen = prompt("Do You want to take canteen membership")
    var transport = prompt("Do You want to take transport membership")

    if (library == "yes") {
        totalfees = totalfees + 2500
    }
    if (sports == "yes") {
        totalfees = totalfees + 4000
    }
    if (canteen == "yes") {
        totalfees = totalfees + 5000
    }
    if (transport == "yes") {
        totalfees = totalfees + 4500
    }
    var percentage = parseFloat(prompt ("Enter Your Percentage"))
    var newFees = totalfees *0.5
  if (percentage >= 90 && percentage<101 ) 
  {
      newFees = totalfees * 0.5
      totalfees = totalfees - newFees
  }
if (percentage>=80) 
{
    newFees = totalfees * 0.25
    totalfees = totalfees - newFees  
} 
document.write ("<h5> You have taken : "+ no_of_course+"</h5>")
document.write ("<h5> Your course fee is: "+ coursefees+"</h5>")
document.write ("<h5> Your new fees is : "+ newFees+"</h5>")
document.write ("<h5> You total fee is  : "+ totalfees+"</h5>")
}
else {
    document.write (".Course Must be greater than 3 & and less than 7`")
    
}

    


