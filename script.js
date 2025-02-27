// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    
    // Select the element that contains all the carousel slides
    const track = document.querySelector(".carousel-track");

    // Convert the list of child elements (slides) into an array for easier manipulation
    const slides = Array.from(track.children);

    // Loop through each original slide and create a duplicate for seamless looping
    slides.forEach((slide) => {
        // Create a deep copy of the slide (including all child elements like SVG and text)
        const clone = slide.cloneNode(true);
        
        // Append the cloned slide to the end of the carousel track
        track.appendChild(clone);
    });

});