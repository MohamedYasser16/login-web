const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ ;
// const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
;
const emailInput = document.querySelector("#email")
const passInput = document.querySelector("#password1")
const repassInput = document.querySelector("#password2")
const mesIcon = document.querySelector("#mesIcon")
const lockIcon1 = document.querySelector("#lockIcon1")
const lockIcon2 = document.querySelector("#lockIcon2")
const ancher = document.querySelector("#ancher")
const alert1 = document.querySelector("#succ")
const alert2 = document.querySelector("#succ2")
const lab = document.querySelectorAll(".lab")
const last = document.querySelector("#last")
const la = document.querySelector("#la")



passInput.addEventListener("input" , function(){
    lockIcon1.classList.add("d-none");
    lab[1].classList.add("d-none");
})
repassInput.addEventListener("input" , function(){
    lockIcon2.classList.add("d-none");
    lab[2].classList.add("d-none");
})

passInput.addEventListener("blur" , function(){
    lockIcon1.classList.remove("d-none");
})
repassInput.addEventListener("blur" , function(){
    lockIcon2.classList.remove("d-none");
})


console.log(last);

console.log(lab);
let  arrUser = [] ;
let  obj = {}
let arrStorage = []

const already = document.querySelector("#already")
if ( localStorage.getItem("arr") == null ) {
    arrUser = [] ;
}
else {
    arrUser=JSON.parse(localStorage.getItem("arr"));
    arrStorage = arrUser
}

last.classList.replace("text-danger" , "text-white-50")
last.classList.replace("text-danger" , "text-white")


function checkEmail (  ) {
    if ( regexEmail.test( emailInput.value ) ) {
       console.log("true email");
       
        return true ;
        
    }
    else {
        console.log("false email");
        alert2.innerHTML = `A fail register ! <br> un valid email !`
        return false ;
        
    }

}




function checkEmailExist () {
    let emailCount = 0
    for (const {email,pass} of arrStorage) {

    if ( email == emailInput.value ) {
        console.log("email exist");
        return true
    }
    else {
        emailCount ++
      }
    } 

    if ( emailCount == arrStorage.length ) {
        console.log("email not founded");
        return false  
    }
}

function samePass () {
    if ( passInput.value == repassInput.value ) {
        repassInput.classList.add("is-valid")
        repassInput.classList.remove("is-invalid")
        console.log("yes");

        return true
    }
    else {
        repassInput.classList.remove("is-valid")
        repassInput.classList.add("is-invalid")
        console.log("no");
        alert2.innerHTML = `A fail register ! <br> un identical password !`
        return false
    }
}

emailInput.addEventListener("click" , () => {
    mesIcon.classList.add("d-none")
    lab[0].classList.add("d-none")
} ) ;
emailInput.addEventListener("blur" , () => {
    mesIcon.classList.remove("d-none")
    checkEmail() ;
    if ( emailInput.value == "" ) {
        lab[0].classList.remove("d-none") 
    }
} ) ;
repassInput.addEventListener("blur" , () => {
    lockIcon2.classList.remove("d-none")
    samePass() ;
    // console.log( "repassInput.value == null" , repassInput.value == "" );
    
    if ( repassInput.value == "" ) {
        lab[2].classList.remove("d-none") 
    }
})
passInput.addEventListener("click" , () => {
    lockIcon1.classList.add("d-none")
    lab[1].classList.add("d-none")
  
 })
 passInput.addEventListener("blur" , () => {
    lockIcon1.classList.remove("d-none") 
    if ( passInput.value == "" ) {
        lab[1].classList.remove("d-none") 
    } 
 })
repassInput.addEventListener("click" , () => {
   lockIcon2.classList.add("d-none") 
   lab[2].classList.add("d-none")  
})

ancher.addEventListener("click" , ()=>{
      obj = {
        email:emailInput.value ,
        pass : passInput.value , 
     }
     console.log(obj);
     console.log(  " checkEmail()", checkEmail() , "samePass()" , samePass() );
     
  if ( checkEmailExist ()  ) {
   

    let time = 5 ;
 
    setInterval( function(){
        already.innerHTML=`<P>You already have an account !<br>login to your account ${time}s</P>`

           time -=1 ;   
           
    }  , 1000 )
  
    already.classList.remove("d-none")


    last.classList.replace("text-white-50" , "text-danger")
   
    
    la.innerHTML=" you already have an account"
    last.classList.replace("text-white" , "text-danger")
    last.setAttribute("href" , "Login_Page.html")

    setTimeout( ()=>{
        location.href="Login_Page.html"
       } , 5500)
  }
else {
    already.classList.add("d-none")
 
    if ( checkEmail() &&  samePass() ) {
     
        // console.log("arrUser" , arrUser);
        // console.log("obj" , obj);
    
     arrUser.push(obj)
      console.log( arrUser);
      
        localStorage.setItem("arr", JSON.stringify(  arrUser ))
        console.log(localStorage);
        alert1.classList.remove("d-none")

        let time = 3 ;
 
        setInterval( function(){
            alert1.innerHTML=`<P> A successful register ! ${time}s</P>`
    
               time -=1 ;   
               
        }  , 1000 )

       alert2.classList.add("d-none")

       setTimeout( ()=>{
        location.href="Login_Page.html"
       } , 3500)
         
       passInput.value = ""
       repassInput.value = ""
       emailInput.value = ""
      
    }
    else {
    
        alert2.classList.remove("d-none")
        alert1.classList.add("d-none")
    }

}
passInput.value = ""
repassInput.value = ""
emailInput.value = ""
})