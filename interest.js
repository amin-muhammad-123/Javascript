function interest(){
var p = parseInt(document.getElementById ("amount").value);
var r = parseFloat(document.getElementById ("rate").value);
var t = parseInt(document.getElementById ("time").value);
var ans = p * (1 + (r * t));
document.getElementById ('res').innerHTML = ans;
}
