function calc(){
    var distance = parseFloat(document.getElementById("meterinput").value);
    var unit = document.getElementById("unit").value;

    if (unit == "Dolor") {
        var convertdistance = distance/202.38;
        document.getElementById("answer").value = convertdistance ;
}
else if (unit == "Dirham") {
    var convertdistance = distance/55.10;
    document.getElementById("answer").value = convertdistance ;
}
else if (unit == "Taka") {
    var convertdistance = distance/2.30;
    document.getElementById("answer").value = convertdistance ;
}
else if (unit == "Euro") {
    var convertdistance = distance/216.74;
    document.getElementById("answer").value = convertdistance ;
}
else if (unit == "Dinar") {
    var convertdistance = distance/661.79;
    document.getElementById("answer").value = convertdistance ;
}
else if (unit == "Pound") {
    var convertdistance = distance/254.34;
    document.getElementById("answer").value = convertdistance ;
}
else if (unit == "Indian RS") {
    var convertdistance = distance/2.61;
    document.getElementById("answer").value = convertdistance ;
}
}