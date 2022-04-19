// var r = parseFloat(prompt("Enter value of r"));
// var h = parseFloat(prompt("Enter value of h"));

// var C = (3.14 * r) * (r + ((h*h) + (r*r)));
// document.write("<h1> The Result Is :" + C  +"</h1>")
// var D = (2*3.14*(r*h)) + (2*3.14*(r*r))
// document.write("<h1> The Result Is :" + D  +"</h1>")
// var E = (3.14*((r*r)*h));
// document.write("<h1> The Result Is :" + E  +"</h1>")



// var a = parseFloat(prompt("Enter value of a"));
// var b = parseFloat(prompt("Enter value of b"));

// var Result = (a*a*a)+(3*a*a*b)+(3*a*b*b)+(b*b*b); 
// document.write("<h1> The Result Is :" + Result  +"</h1>")


// var vf = parseFloat(prompt("Enter value of vf"));
// var vi = parseFloat(prompt("Enter value of vi"));

// var S = ((vf*vf)-(vi*vi))/(2*a)
// document.write("<h1> The Result Is :" + S  +"</h1>")

// var vi = parseFloat(prompt("Enter value of vi"));
// var t = parseFloat(prompt("Enter value of t"));

// var result = (vi*t) + ((1*a*t*t)/2)
// document.write("<h1> The Result Is :" + result  +"</h1>")



 var names = prompt("What Is your name");
 var English =parseFloat (prompt("What Is your English Marks"));
 var Urdu =parseFloat (prompt("What Is your Urdu Marks"));

 var physics=parseFloat (prompt("What Is your physics Marks"));
 var chemistry =parseFloat (prompt("What Is your chem Marks"));
 var computer =parseFloat (prompt("What Is your comp Marks"));

var Total = (English+Urdu+physics+chemistry+computer)
document.write(  names + " " + "Your Total marks : " + Total  )

var Percentage = (Total/300)*100
document.write("Your Pecentage% Is : " + Percentage +"%"  )






