function password_show(){
    var x = document.getElementById("pwd");
    var y = document.getElementById("pwd-show");
    var z = document.getElementById("pwd-hide");

    if (x.type === 'password') {
        x.type = "text";
        y.style.display ="block";
        z.style.display ="none";
        
    } else {
        x.type = "password";
        y.style.display ="none";
        z.style.display ="block";
    }
}

console.log("Working")