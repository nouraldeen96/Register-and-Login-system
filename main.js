var reg = document.getElementById("register")
var log = document.getElementById("log")
var home = document.getElementById("home")
const hide1 = document.getElementById("hide1")
const hide2 = document.getElementById("hide2")
const hide3 = document.getElementById("hide3")
var pass1= document.getElementById("pass1")
var pass2= document.getElementById("pass2")
var pass_log= document.getElementById("pass_log")
var register= document.querySelector(".btn")
var users;
var newUser;

// hide password
hide1.addEventListener("click",function(){
    if (pass1.getAttribute('type')==='password'){
        pass1.setAttribute('type','text');
    }else{
        pass1.setAttribute('type','password');
    }
  
})

hide2.addEventListener("click",function(){
    if (pass2.getAttribute('type')==='password'){
        pass2.setAttribute('type','text');
    }else{
        pass2.setAttribute('type','password');
    }
  
})

hide3.addEventListener("click",function(){
    if (pass_log.getAttribute('type')==='password'){
        pass_log.setAttribute('type','text');
    }else{
        pass_log.setAttribute('type','password');
    }
  
})

// show register
function show_reg(event){
    
    reg.style.display= "block";
    document.getElementById("title").innerHTML = "Register"
    log.style.display = "none";
    home.style.display = "none";
    event.preventDefault();
}

// show login
function show_log(){
    reg.style.display= "none";
    document.getElementById("title").innerHTML = "Login"
    log.style.display = "block";
    home.style.display = "none";
}

// show home
function tohome(event){
    reg.style.display= "none";
    log.style.display = "none";
    home.style.display = "block";
    document.getElementById("title").innerHTML = "Home"
   
}
    



// register new user system
document.forms[0].onsubmit= function (event){
    let fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dateOfBirth = document.getElementById("dob").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("pass1").value;
    var conPass=document.getElementById("pass2").value;
    let regexEmail = /\w@\w{5,}.\w/;
    let regexPhone = /\+\d{3}\s\d{3}\s\d{3}\s\d{3}/;

    newUser = {
            "first name":fname,
            "last name":lname,
            "dateOfBirth":dateOfBirth ,
            "gender":gender,
            "email":email,
            "phone":phone,
            "pass":pass,
    };
    if (fname !=="" && 
        lname!=="" && 
        dateOfBirth !=="" && 
        gender !=="" && 
        pass===conPass && pass!==""){if(regexEmail.test(email)){if(regexPhone.test(phone)){
       
            if(localStorage.getItem("users") ===null){
                users=[]
            }else{
                users = JSON.parse(localStorage.getItem("users"))
            }
            users.push(newUser)
            localStorage.setItem("users",JSON.stringify(users));}else{
                window.alert("please Check Your Phone Number") 
                event.preventDefault() 
            }}else{
                window.alert("please Check Your email") 
                event.preventDefault() 
            }  

        }else{
            window.alert("please Check The Entries")
            event.preventDefault()
        }
}



// login system
function check (event) {
    var email_log = document.getElementById("email_log").value;
    var pass_log = document.getElementById("pass_log").value;
    var getUser =JSON.parse(localStorage.getItem("users"))
    var index = "null";
    if(email_log !=="" && pass_log !== ""){if (getUser === null){
        window.alert("You don't have account\n Please Register")
        show_reg(event);
    }
    else{
        for (var i=0;i<getUser.length;i++ ){
            if(email_log ===getUser[i].email){
                index = i
                break; }
                else{
                    index = "null"
                }} 

                if (index !== "null"){
                    if(pass_log === getUser[index ]["pass"] ){
                        window.alert(`Hello ${getUser[index ]["first name"]}`)
                        tohome(event)
                        if(getUser[index]["gender"]==="male")
                        {document.getElementById("hello").innerHTML = `Welcome Back Mr ${getUser[index]["first name"]}`}
                        else
                        {document.getElementById("hello").innerHTML = `Welcome Back Mrs ${getUser[index]["first name"]}`}
                        event.preventDefault()
                        

                    }else{
                        window.alert(`Please ${getUser[index]["first name"]} Cheak Your Password`)
                        event.preventDefault()
                    }
                }
                else
                    {window.alert("You don't have account\n Please Register");
                    show_reg(event);
                  
                }     
                }}else
                {window.alert("please Check The Entries")}
                
   }







