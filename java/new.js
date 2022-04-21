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



//  var names = prompt("What Is your name");
//  var English =parseFloat (prompt("What Is your English Marks"));
//  var Urdu =parseFloat (prompt("What Is your Urdu Marks"));

//  var physics=parseFloat (prompt("What Is your physics Marks"));
//  var chemistry =parseFloat (prompt("What Is your chem Marks"));
//  var computer =parseFloat (prompt("What Is your comp Marks"));

// var Total = (English+Urdu+physics+chemistry+computer)
// document.write(  names + " " + "Your Total marks : " + Total  )

// var Percentage = (Total/300)*100
// document.write("Your Pecentage% Is : " + Percentage +"%"  )


var puri = parseInt (prompt ("How many puri do you want to purchase"));
var TotalPuriBill = puri * 29 ;
var halwa = parseInt (prompt ("How Much halwa do you want?"));
var allo = parseFloat(prompt ("How Many Allo Plates do You want ?"))
var chane = parseFloat(prompt ("How Many chane Plates do You want ?"))
var achar = parseFloat(prompt ("How Many achar packets do You want ?"))

var halwabill = halwa * 20
var allobill = allo *55
var chanebill = chane *100
var acharbill = achar *15

var TotalBill =  TotalPuriBill + halwa + allo +chane +achar
var Tax = TotalBill * 0.16
 
var AmountToPay = TotalBill + Tax


document.write  ("Quantity :" + puri + "<hr/>");
document.write  ("Your Puri Bill iS :" + " " + TotalPuriBill + "<hr/>");
document.write  ("Your Halwa Bill iS:" + " " + halwabill + "<hr/>");
document.write  ("Your Allo Bill iS:" + " " + allobill + "<hr/>");
document.write  ("Your Chane Bill iS" + " " + chanebill + "<hr/>");
document.write  ("Your Achar Bill iS"  + " " + acharbill + "<hr/>");

// document.write  ("Your Total Bill is :" + TotalBill + "<hr/>");
document.write  ("Your Tax is :" + Tax + "<hr/>");
document.write  ("Amount To Pay :" + AmountToPay + "<hr/>");












































































