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



console.log(buttonSlider);
console.log(slider);

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



 