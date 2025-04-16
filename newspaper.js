function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const modeToggle = document.querySelector('.mode_toggle');

    if (document.body.classList.contains('dark-mode')) {
        modeToggle= 'modeToggle';
    } else {
        modeToggle= 'modeToggle';
    }
};


document.addEventListener('DOMContentLoaded', function() {
const sliderContainer = document.getElementById('latestNewsSlider');
if (!sliderContainer) return;

const slider = sliderContainer.querySelector('.slider_container');
const slides = slider.querySelectorAll('.slide');
let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;
const intervalTime = 4000; // Time in milliseconds (3 seconds)

function goToSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

// Start the automatic sliding
setInterval(nextSlide, intervalTime);

// Optional: Add some basic styling to prevent horizontal scrollbar if needed
sliderContainer.style.overflow = 'hidden';
});

document.addEventListener('DOMContentLoaded', function() {
    const theoriesSliderContainer = document.querySelector('.theories-spoilers .theories-slider-container');
    if (!theoriesSliderContainer) return;

    const theoriesSlider = theoriesSliderContainer.querySelector('.theories-slider-container'); // Redundant, but keeping for clarity
    const theoriesSlides = theoriesSliderContainer.querySelectorAll('.theories-slide');
    let currentTheoryIndex = 0;
    const theorySlideWidth = theoriesSlides[0]?.offsetWidth || 0; // Get width, handle potential error
    const theoryIntervalTime = 5000; // Time in milliseconds (5 seconds)
    const numberOfVisibleSlides = 1; // Assuming one slide is visible at a time

    function goToTheorySlide(index) {
        if (!theoriesSlider) return; // Exit if slider element not found
        const maxIndex = theoriesSlides.length - numberOfVisibleSlides;
        if (index < 0) {
            currentTheoryIndex = 0;
        } else if (index > maxIndex) {
            currentTheoryIndex = maxIndex;
        } else {
            currentTheoryIndex = index;
        }
        theoriesSlider.style.transform = `translateX(-${currentTheoryIndex * theorySlideWidth}px)`;
    }

    function nextTheorySlide() {
        goToTheorySlide(currentTheoryIndex + 1);
    }

    // Start the automatic sliding
    setInterval(nextTheorySlide, theoryIntervalTime);

    // Optional: Add functionality for manual control (e.g., buttons)
    // You could add event listeners to buttons like "Next" and "Previous" here
    // For example:
    // const nextButton = document.querySelector('.next-theory-button');
    // if (nextButton) {
    //     nextButton.addEventListener('click', nextTheorySlide);
    // }
});