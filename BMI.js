function BMI(){
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var Final_BMI  = (weight / (height*height))

    if (Final_BMI <= 18.5) {
        document.getElementById("show").innerHTML = Final_BMI + "=" + "underweight" ;
    }
    else if (Final_BMI >= 18.5 && Final_BMI<= 24.9  ) {
        document.getElementById("show").innerHTML = Final_BMI + "=" + "normal" ;
    }

    else if (Final_BMI >= 24.9 && Final_BMI<= 29.9  ) {
        document.getElementById("show").innerHTML = Final_BMI + "=" + "overweight";
    }
    
    else {
        document.getElementById("show").innerHTML =Final_BMI+ "obesity";
        

    }

}
