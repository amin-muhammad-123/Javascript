function calc(){
    var temperature = parseFloat(document.getElementById("temp").value);
    var units = document.getElementById("units").value;

    if (units == "Fahrenheit") {
        var converttemperature = (temperature * 9/5) + 32 ;
        document.getElementById("result").value = converttemperature + " F";
    }
    else if (units == "Kelvin") {
        var converttemperature = temperature + 273.15;
        document.getElementById("result").value =converttemperature + "  K";
    }
    else  {
        document.getElementById("result").value = "Choose units Correctly";
    }
}