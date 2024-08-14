let slideIndex = 0;
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = "none";  
        dots[index].className = dots[index].className.replace(" active-dot", "");
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active-dot";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); 