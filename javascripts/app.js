//menu 
let menu = document.querySelector('.ham_burger_menu');
let full = document.querySelector('.full');
let start = document.querySelector('.start');
let end = document.querySelector('.end');
let menu_bar=document.querySelector('.menu_bar')
let menu_open = false;

function menu_animation() {

    if (menu_open === false) {

        start.setAttribute('style', 'animation: start 0.4s forwards linear;');
        end.setAttribute('style', 'animation: end 0.4s forwards linear;');
        full.setAttribute('style', 'animation: full 0.4s forwards linear;');
        
        menu_bar.setAttribute('style', 'animation: menu_down 0.6s forwards linear;');
        menu_open = true;

    } else {
        start.setAttribute('style', 'animation: start_close 0.4s forwards linear;');
        end.setAttribute('style', 'animation: end_close 0.4s forwards linear;');
        full.setAttribute('style', 'animation: full_close 0.4s forwards linear;');
        
        menu_bar.setAttribute('style', 'animation: menu_up 0.6s forwards linear;');
        menu_open = false;
    }
}
//menu ends
//typing effect
var typed = new Typed("#type_js", {
    strings: ["WEB DESIGNER.", "UI/UX DESIGNER.", ],
    typeSpeed: 80,
    smartBackspace: true, // Default value
    backSpeed: 12,
    loop: true,
    backDelay: 5000,
});