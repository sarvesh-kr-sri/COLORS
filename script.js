const menu= document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav__menu');
const navlogo= document.querySelector('#nav__logo')
//display mobile menu

const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu);

//show active menu when scrolling

const highlightMenu= () =>{
    const elem = document.querySelector('.highlight')
    const home = document.querySelector('#home-page')
    const about = document.querySelector('#about-page')
    const services = document.querySelector('#services-page')
    let scrollpos = window.scrollY

    //adds the highlight to my menu item

    if(window.innerWidth > 960 && scrollpos < 600){
        home.classList.add('highlight')
        about.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollpos < 1400){
        about.classList.add('highlight')
        home.classList.remove('highlight')
        services.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollpos < 2345){
        services.classList.add('highlight')
        about.classList.remove('highlight')
        home.classList.remove('highlight')
        return
    }
    if((elem && window.innerWidth<960 && scrollpos<600 )|| elem){
        elem.classList.remove('highlight')
    }
}
window.addEventListener('scroll',highlightMenu)
window.addEventListener('click',highlightMenu)


// close mobile menu when clicking on menu item 

const hidemobmenu = () =>{
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth<768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hidemobmenu)
navlogo.addEventListener('click', hidemobmenu)