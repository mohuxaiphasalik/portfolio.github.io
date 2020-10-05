//home text change
var typed = new Typed(".tags", {
    strings: ["WEB DEVELOPER.", "UI/UX DESIGNER.", "WEB DESIGNER."],
    typeSpeed: 80,
    smartBackspace: true, // Default value
    backSpeed: 12,
    loop: true,
    backDelay: 5000,
});
//header p change
/*
var typed = new Typed(".p_header", {
    strings: [
        "I use Python Web Framework Django for Backend.I Use Jquery, JavaScript and React to make page interractive at Frontend.",
        "I know how to get best out of Adobe XD,Photoshop.As a UX Designer Targeting my Audience is Crucial Part of My Project.",
        "My mission to stand out.My development process was created to ensure every project is delivered on-time and on-budget.",
    ],
    typeSpeed: 6,
    smartBackspace: true, // Default value
    backSpeed: 5,
    loop: true,
    backDelay: 4500,
});*/
//home text change ends
//to change font color
var hire = document.querySelector(".hire");
let tags = document.getElementById("tags");
let colors = ["#af0101", "orangered", "rgb(111, 0, 255)"];
var number = 0;

function color_change() {
    if (number <= 2) {
        tags.style.color = colors[number];
        hire.style.color = colors[number];
        hire.style.border = "1px solid " + colors[number];
        number++;
    } else {
        number = 0;
        tags.style.color = colors[number];
        hire.style.color = colors[number];
        hire.style.border = "1px solid " + colors[number];

        number++;
    }
    setTimeout("color_change()", 7200);
}
color_change();
//color  change ends
//chang had background
/*let header = document.getElementById("header");
let bg_list = [
    "images/1st.png",
    "images/2nd.png",
    "images/3rd.png",
    "images/4th.png",
    "images/5th.png",
    "images/6th.png",
];
var i = 0;
//header_bg_change();

function header_bg_change() {
    if (i <= 5) {
        header.setAttribute("style", "background:url(" + bg_list[i] + ");");
        console.log(bg_list[i]);
        i++;
    } else {
        i = 0;
        header.setAttribute("style", "background:url(" + bg_list[i] + ");");
        console.log(bg_list[i]);
        i++;
    }
    setTimeout("header_bg_change()", 3000);
}*/

//headers ends
//projects