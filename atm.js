alert("welcome to  falana Dhimaka bank")
var pin = parseInt(prompt("enter you pin code"));
var balance = 2000
if (pin == 1234) {
    var lang = parseInt(prompt("press 1 - English - اردو - 2"));
    if (lang == 1) {
        var choice = parseInt(prompt("press 1 - withdraw 2 - deposite 3 - balance enquiry"));
        switch (choice) {
            case 1:
                var amount = parseInt(prompt("enter amount to withdraw"))
                if (amount <= balance) {
                    var newbalance = balance - amount;
                    document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'> your new balance is" + newbalance + "</h3></center>")
                }
                else{
                    document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'> your balance is not enough" + newbalance + "</h3></center>")

                }
                break;
                case 2:
                    var amount = parseInt(prompt("for deposite your amount"));
                    var newbalance = balance + amount;
                    document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'> your valid balance is " + newbalance + "</h3></center>")
                    break;

                    case 3:
                    document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'> your valid balance is " + balance + "</h3></center>")
                    break;

        
            default:
                document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'> get lost </h3></center>")

                break;
        }

    }
    else if (lang == 2) {
        var choice = parseInt(prompt("1 دبائیں - واپس لیں 2 - جمع کریں 3 - بیلنس انکوائری"));
        switch (choice) {
            case 1:
                var amount = parseInt(prompt("نکالنے کے لیے رقم درج کریں۔"))
                if (amount <= balance) {
                    var newbalance = balance - amount;
                    document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'> آپ کا نیا بیلنس ہے۔" + newbalance + "</h3></center>")
                }
                else{
                    document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'> آپ کا نیا بیلنس ہے۔" + newbalance + "</h3></center>")

                }
                break;
                case 2:
                    var amount = parseInt(prompt("اپنی رقم جمع کرنے کے لیے"));
                    var newbalance = balance + amount;
                    document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'> آپ کا موجودہ بیلنس ہے۔ " + newbalance + "</h3></center>")

                    break;

                    case 3:
                    document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'> آپ کا موجودہ بیلنس ہے۔ " + balance + "</h3></center>")
                    break;

        
            default:
                document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'> دفعہ ہو جاو</h3></center>")

                break;
        }
    }
}

else{
    document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'>get lost </h3></center>")
    document.write("<center><h3 style ='color:red;background-colour:yellow;border:2px solid red;width:fit content;'> دفعہ ہو جاو</h3></center>")

}