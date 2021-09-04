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

//menu slide -------------------------------------------------------------
var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");
var xIcon2 = document.querySelector(".xIcon2");
ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    // xIcon.style.display = "none";
    // menuIcon.style.display = "block";
  } 
  else {
    menu.classList.add("showMenu");
    // xIcon.style.display = "block";
    // menuIcon.style.display = "none"; 
  }
}
xIcon2.addEventListener('click', function(){
    menu.classList.remove('showMenu');
})



//fine menu slider---------------------------------------------------------------------




var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)

buttonSlider.forEach(
    but =>{ but.addEventListener('click', function(){
        slider.forEach(slide =>{
          console.log('eccomi');
          slide.classList.toggle('scroll');}
        )
    });
});


// if(button)button.addEventListener('click',function(){
//   console.log('senti');
//   slides.forEach(slide => slide.classList.toggle('next'));
// });
   
// slides.forEach(
//     button.addEventListener('click', function(){
//         console.log('sento');
//         slides.forEach(slide => slide.classList.toggle('next'));
        
//     })
    
// );
if(button){button.addEventListener('click',function(){
  console.log('senti');
  slides.forEach(slide => slide.classList.toggle('next'));
});

}


// box categorie ----------------------------------------------------------------------
var nav = document.querySelector(".nav_categories_comparsa");
var cat = document.querySelector(".cat");
var xIcon3 = document.querySelector(".xIcon3");
var categorieButton = document.querySelector(".categorieButton");
var xIcon4 = document.querySelector(".xIcon4");

cat.addEventListener('click', toggleCate);

function toggleCate() {
  if (nav.classList.contains("showCate")) {
    nav.classList.remove("showCate");
    xIcon3.style.display = "none";
    categorieButton.style.display = "block";
  } 
  else {
    nav.classList.add("showCate");
    xIcon3.style.display = "block";
    // categorieButton.style.display = "none"; 
  }
}
xIcon4.addEventListener('click', function(){
    nav.classList.remove('showCate');
}) 
// fine box categorie -----------------------------------------------------------------
 