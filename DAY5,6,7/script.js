function validateForm()
{
    let returnValue
    let userID=document.getElementById("userID").value;
    let idMessage=document.getElementById("idMessage");

    if(userID=="")
    {
        idMessage.innerHTML="user ID cannot be empty";
        idMessage.className="text-danger";
        returnValue= false;
    }

    else if(userID.length < 3 || userID.length > 15)
    {
        idMessage.innerHTML="User id must be minimum 3  and maximum 15 characters";
        idMessage.className="text-danger";
        returnValue= false;
    }

    else 
    {
        idMessage.innerHTML="Perfect Input";
        idMessage.className="text-success";
        returnValue= true;
    }


    let password=document.getElementById("password").value;
    let passwordMessage=document.getElementById("passwordMessage");

    if(password=="")
    {
        passwordMessage.innerHTML="Password cannot be empty";
        passwordMessage.className="text-danger";
        returnValue= false;
    }

    else if(password.length < 8)
    {
        passwordMessage.innerHTML="Password must be minimum 8 characters";
        passwordMessage.className="text-danger";
        returnValue= false;
    }
    
    else 
    {
        passwordMessage.innerHTML="Perfect Input";
        passwordMessage .className="text-success";
        returnValue= true;
    }


    let mobile=document.getElementById("mobile").value;
    let mobileMessage=document.getElementById("mobileMessage");

    if(mobile=="")
    {
        mobileMessage.innerHTML="Mobile cannot be empty";
        mobileMessage.className="text-danger";
        returnValue= false;
    }

    else if(mobile.length !== 10)
    {
        mobileMessage.innerHTML="Mobile must be a 10 digit number";
        mobileMessage.className="text-danger";
        returnValue= false;
    }

    else 
    {
        mobileMessage.innerHTML="Perfect Input";
        mobileMessage.className="text-success";
        returnValue= true;
    }

    let address=document.getElementById("address").value;
    let addressMessage=document.getElementById("addressMessage");

    if(address=="")
    {
        addressMessage.innerHTML="Address cannot be empty";
        addressMessage.className="text-danger";
        returnValue= false;
    }

    else 
    {
        addressMessage.innerHTML="Perfect Input";
        addressMessage.className="text-success";
        returnValue= true;
    }


    let age=document.getElementById("age").value;
    let ageMessage=document.getElementById("ageMessage");

    if(age=="")
    {
        ageMessage.innerHTML="Age cannot be empty";
        ageMessage.className="text-danger";
        returnValue= false;
    }

    else if(age < 18 || age > 100)
    {
        ageMessage.innerHTML="Either too Young or too Old";
        ageMessage.className="text-danger";
        returnValue= false;
    }

    else 
    {
        ageMessage.innerHTML="Perfect Input";
        ageMessage.className="text-success";
        returnValue= true;
    }



    return false;



}