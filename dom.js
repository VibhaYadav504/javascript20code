let nameInput=document.querySelector('#name')
let emailInput=document.querySelector('#email')
let nameValue=document.querySelector('.nameValue')
let emailValue=document.querySelector('.emailValue')



nameInput.addEventListener('input',function(e){
    nameValue.innerText=e.target.value

})
nameInput.addEventListener('input',function(e){
    emailValue.innerText=e.target.value
})