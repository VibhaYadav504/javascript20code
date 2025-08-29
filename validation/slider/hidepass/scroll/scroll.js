let navbar=document.querySelector('nav')

window.addEventListener('scroll',(e)=>{
    console.log(window.scrollY)
    if(window.scrollY > 100){
        navbar.classList.add('stick')
    }else{
        navbar.classList.remove('stick')
    }
})