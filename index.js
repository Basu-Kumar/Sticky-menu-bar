let navbar=document.getElementById("menu-bar");

window.addEventListener('scroll',function(){

    if(window.pageYOffset>=145){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
});