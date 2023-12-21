
function validate(){
    var password = document.getElementById("pass");

    if(password.value== 10101){
        alert("Login Succesfull");
        window.location.replace("newpage.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}
