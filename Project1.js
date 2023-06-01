


function checkPassword(){
    const nP = document.getElementById("password").value;
    const cP = document.getElementById("Confirm_Password").value;


    if(nP == ""){
        document.getElementById("msg").innerHTML = "Please Enter Password"
        document.getElementById("msg").style.color = "red";
        return false
    }
   

  
if( nP != cP){
    document.getElementById("msg").innerHTML = "Password is not matching."
    document.getElementById("msg").style.color = "red"
    return false;
}
else{
    document.getElementById("msg").innerHTML = "Password is  matching."
    document.getElementById("msg").style.color = "green"
    
    return false;
}


}
