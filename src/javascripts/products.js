// javascripts/products.js
import '../stylesheets/products.css'; // Adjust the path to your CSS file
 


function filterAnimation() {
    function toggleActiveClass(event) {
        var box = event.currentTarget.querySelector('.box');
        box.classList.toggle('active');
    }
    var categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', toggleActiveClass);
    });
}
filterAnimation();

function homepageAnimation() {
    var homeright = document.querySelector(".home-right");
    var homeleft = document.querySelector(".home-left");
    var shoesboxes = document.querySelectorAll(".shoes-boxes");
    var footer = document.querySelector(".footer");
    const initialHeight = '40vw';
    const expandedHeight = '45vw';
    let isExpanded = false;

   
}
homepageAnimation();

function menubarAnimation() {
    var closeicon = document.querySelector(".close-icon");
    var menubar = document.querySelector("#menu-bar");
    var navpart4 = document.querySelector(".nav-part4");

    menubar.addEventListener("click", function() {
        navpart4.style.scale = 1;
    });

    closeicon.addEventListener("click", function() {
        navpart4.style.scale = 0;
    });
}
menubarAnimation();


var filterparts = document.querySelector(".filter-parts");
var filteroption = document.querySelector(".filter-option");
var close = document.querySelector(".close");

filteroption.addEventListener("click", function() {
    filterparts.style.display = "initial";
});

close.addEventListener("click", function() {
    filterparts.style.display = "none";
});
