//adding smooth scroll
$(document).ready(function() {
    var scrollLink = $(".click");
    scrollLink.click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
});
//scroll ends
var header_background = document.getElementById("bg");
var number = 0;
var bg_img = ["bg1.png", "bg2.png", "bg3.png", "bg4.png"];

function bg_slide_show() {
    if (number <= 3) {
        header_background.src = bg_img[number];
        number++;
    } else {
        number = 0;
    }
    setTimeout("bg_slide_show()", 3000);
}
window.onload = bg_slide_show;
//bg Slideshow ends

//   project function
var lahore = document.querySelector(".lahore");
var on_click_show = document.querySelector(".on_click_show");
var on_click_show_cc = document.querySelector(".on_click_show_cc");

var cc = document.querySelector(".cc");

function project_cc() {
    cc.setAttribute(
        "style",
        "animation:move_cc linear; animation-duration:1s;animation-fill-mode:forwards;"
    );
    on_click_show_cc.setAttribute(
        "style",
        "animation:opacity_increasing linear;animation-delay:1s;animation-duration:1s;z-index:1500;animation-fill-mode:forwards;"
    );
    lahore.setAttribute("style", "opacity:0;z-index:-1;");
}

function project() {
    lahore.setAttribute(
        "style",
        "animation:move_project linear; animation-duration:.5s;animation-fill-mode:forwards;"
    );
    on_click_show.setAttribute(
        "style",
        "animation:opacity_increasing linear;animation-delay:.5s;animation-duration:1s;z-index:1500;animation-fill-mode:forwards;"
    );
    cc.setAttribute("style", "opacity:0;z-index:-1;");
}