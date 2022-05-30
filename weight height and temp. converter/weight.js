function calc(){
    // var weight = document.parsefloat(getElementById("KG").value);
    // var units = document.getElementById("units").value;

    // if (units == "Gram") {
    //     var weightcoverter = weight * 1000;
    //     document.getElementById("result").value = weightcoverter + " g";
    // }

    // else if (units == "Pound") {
    //     var weightcoverter = weight * 2.205;
    //     document.getElementById("result").value = weightcoverter + " p";
    // }

    // else if (units == "Ton") {
    //     var weightcoverter = weight / 907; 
    //     document.getElementById("result").value = weightcoverter + " t";
    // }

    // else{
    //     document.getElementById("result").value = "choose unit correctly";
    // }

    var weight = parseFloat(document.getElementById("KG").value);
    var units = document.getElementById("units").value;

    if (units == "Gram") {
        var convertweight = weight * 1000;
        document.getElementById("result").value = convertweight + " gram";
    }
    else if (units == "Pound") {
        var convertweight = weight * 2.205;
        document.getElementById("result").value = convertweight + " pound";
    }
    else if (units == "Ton") {
        var convertweight = weight / 907;
        document.getElementById("result").value = convertweight + " ton";
    }
    else  {
        document.getElementById("result").value = "Choose Input Correctly";
    }
}