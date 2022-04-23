
 var names = prompt("What Is your name");
 var English =parseFloat (prompt("What Is your English Marks"));
 var Urdu =parseFloat (prompt("What Is your Urdu Marks"));
 var physics=parseFloat (prompt("What Is your physics Marks"));
 var chemistry =parseFloat (prompt("What Is your chem Marks"));
 var computer =parseFloat (prompt("What Is your comp Marks"));
 var Total = (English+Urdu+physics+chemistry+computer)
 var Percentage = (Total/500)*100
 document.write(  names + " " + "Your Total marks : " + Total + "<hr/>" )
 document.write("Your Pecentage% Is : " + Percentage +"%" +  "<hr/>"  )
 


 if (Percentage>=80) {
     document.write("You Have Got A+")
 }

else if (Percentage>=70) {
    document.write("You Have Got A")
}

else if (Percentage>=60) {
    document.write("You Have Got B")
}

else if (Percentage>=50) {
    document.write("You Have Got C")
}

else  {
    document.write("You are Fail")
}


var email = prompt("Enter Your Email")
var pwd = prompt("Enter Your Password")
if (email=="amin@gmail.com" && pwd == "admin123") {
    document.write  ("Welcome Admin")
}
else{
    document.write ("Wrong Credential")
}
