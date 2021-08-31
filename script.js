var dots = document.querySelectorAll(".dot");
var out= document.querySelector('body');
const slides =document.querySelectorAll('.slide');
const totalSlides = slides.length;
var button = document.getElementById("button");

dots.forEach(dot =>{
    dot.addEventListener('click', function(){
        dots.forEach(dt => dt.classList.remove('active'));
        this.classList.add('active');
    });
});

console.log(totalSlides);
// console.log(slides);


   
slides.forEach(
    button.addEventListener('click', function(){
        console.log('sento');
        slides.forEach(slide => slide.classList.toggle('next'));
        
    })
    
);




