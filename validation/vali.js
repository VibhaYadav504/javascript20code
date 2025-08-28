let nameInput=document.querySelector('#name')
let emailInput=document.querySelector('#email')
let passwordInput=document.querySelector('#password')
let nameError=document.querySelector('.nameError')
let emailError=document.querySelector('.emailError')
let passwordError=document.querySelector('.passwordError')

nameInput.addEventListener('input',function(e){
    let name=e.target.value
if(name.length <3){
    nameError.innertext='Name must be atleast 3 characters long'

}else {
    nameError.innerText='';
}

})
emailInput.addEventListener('input',function(e){
    let email=e.target.value
    if(!email.includes('@') || !email.includes('.')){
      emailError.innerText='Email is invalid'  
    }else{
        emailError.innerText=''

    }
})
passwordInput.addEventListener('input',function(e){
    let password=e.target.value
    if(password.length < 6 ){
        passwordError.innerText='Name must be atleast 3 character long'
    }else{
        passwordError.innerText='';
    }
})