const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ ;
const emailInput = document.querySelector("#email")
const passInput = document.querySelector("#password1")
const mesIcon = document.querySelector("#mesIcon")
const lockIcon1 = document.querySelector("#lockIcon1")
const ancher = document.querySelector("#ancher")
const alert1 = document.querySelector("#succ")
const lab = document.querySelectorAll(".lab")
// const already = document.querySelector("#already")
const alert2 = document.querySelector("#succ2")

console.log(lab);

emailInput.addEventListener("input" , function(){
    mesIcon.classList.add("d-none");
    lab[0].classList.add("d-none");
})

passInput.addEventListener("input" , function(){
    lockIcon1.classList.add("d-none");
    lab[1].classList.add("d-none");
})

passInput.addEventListener("blur" , function(){
    lockIcon1.classList.remove("d-none");
})



console.log(lab);
let  arrUser = [] ;
let arrStorage = []
let  obj = {}
if ( localStorage.getItem("arr") == null ) {
    arrUser = [] ;
}
else {
    arrUser=JSON.parse(localStorage.getItem("arr"));
    arrStorage = arrUser;
    console.log(arrStorage);
    
}


function checkEmail_innerAlert (  ) {
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

function check(  ) {
    let count = 0 

    for (const {email,pass} of arrStorage) {

     if ( emailInput.value == email && passInput.value == pass ) {
        console.log("he exist");
        return true
     } 
      else {
        count ++
      }
    } 

    if ( count == arrStorage.length ) {
        console.log("not founded");
        return false  
    }
}

if ( checkEmail () ) {
    already.classList.remove("d-none")
}

function checkEmail () {
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
        alert2.innerHTML = `A fail register ! <br> email not founded !`
        return false  
    }
}


emailInput.addEventListener("click" , () => {
    mesIcon.classList.add("d-none")
    lab[0].classList.add("d-none")
} ) ;
emailInput.addEventListener("blur" , () => {
    mesIcon.classList.remove("d-none")
    if ( emailInput.value == "" ) {
        lab[0].classList.remove("d-none") 
    }
} ) ;

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


ancher.addEventListener("click" , ()=>{
  
    check(  )
    checkEmail_innerAlert (  )
    checkEmail ()
    
    
    console.log( check() , checkEmail() );
    let time = 3 ;
    if ( check() ) {
        alert1.classList.remove("d-none")

        // setInterval( function(){
        //     alert1.innerHTML=`     A successful login ${time}s !
        // <br>
        // <img class="w-100"  src="img/icons8-tick.gif" alt="img">`
    
        //        time -=1 ;   
               
        // }  , 1000 )
        alert2.classList.add("d-none");
    setTimeout( ()=>{
        location.href="https://challenge-front-mentor-lyart.vercel.app/" ;
        alert1.classList.add("d-none")
        emailInput.value = ""
        passInput.value = ""

       } , 3500)
    }
    else {
        alert2.classList.remove("d-none")
        alert1.classList.add("d-none")
    }
})
