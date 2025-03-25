const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');


mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
var options = {
    strings: ["shawarma", "masa", "milky donut" ,'burger','and more'],
    typeSpeed: 120,
    backSpeed: 130,
    loop: true
};
var typed = new Typed("#typed", options);


const btns = document.getElementById("btns")
btns.addEventListener("click",() => {
    const myt = document.getElementById("myt")
    if (myt.value ===""){
        alert("you cant submit an empty text")
    }
    else{
        myt.value = "";
        alert("thanks for your feedback")
    }

})
let index = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    index = (index + direction + totalSlides) % totalSlides; // Wrap around

    const slider = document.querySelector('.slider');
    const offset = -index * 100; // Move the slider by 100% for each slide

    slider.style.transform = `translateX(${offset}%)`;
}

// Optional: Auto slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 10000);
