var dots = document.querySelectorAll(".dot");
const slides =document.querySelectorAll('.slide');
var button = document.getElementById("button");
var buttonSlider = document.querySelectorAll('[data-slider="button"]');
var slider = document.querySelectorAll('.slider');


dots.forEach(dot =>{
    dot.addEventListener('click', function(){
        dots.forEach(dt => dt.classList.remove('active'));
        this.classList.add('active');
    });
});

var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");
var xIcon2 = document.querySelector(".xIcon2");
ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } 
  else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none"; 
  }
}
xIcon2.addEventListener('click', function(){
    menu.classList.remove('showMenu');
})

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)

buttonSlider.forEach(
    but =>{ but.addEventListener('click', function(){
        slider.forEach(
            slide =>{slide.classList.toggle('scroll');}
        )
    });
});


// buttonServices.addEventListener('click',function(){
//     console.log('ci siamo');
//     slider.classList.toggle('scroll');

// });



   
slides.forEach(
    button.addEventListener('click', function(){
        console.log('sento');
        slides.forEach(slide => slide.classList.toggle('next'));
        
    })
    
);



 