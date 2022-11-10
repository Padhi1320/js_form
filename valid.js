let username= document.getElementById("username");
let password= document.getElementById("password");
let flag=1;

function validateForm(){
    if(username.value==""){
        document.getElementById('usererror').innerHTML="username is empty";
        flag=0;
    }else if(username.value.length < 5){
        document.getElementById('usererror').innerHTML="username is required 5 char";
        flag=0;
    }
    else{
        document.getElementById('usererror').innerHTML="";
        flag=1;
    }
    if(password.value==""){
        document.getElementById('passerror').innerHTML="password is empty";
        flag=0;
    }else{
        document.getElementById("passerror").innerHTML="";
        flag=1;
    }
    if(flag){
        return true;

    }else{
        return false;
    }
}