function calc(){
    var Height = parseFloat(document.getElementById("Height").value);
    var units = document.getElementById("units").value;

    if (units == "Centimeter") {
        var convertheight = Height * 30.48;
        document.getElementById("result").value = convertheight + " CM";
    }
    else if (units == "Meter") {
        var convertheight = Height / 3.281;
        document.getElementById("result").value = convertheight + " M";
    }
    else  {
        document.getElementById("result").value = "Choose Units Correctly";
    }
}