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


// Modal Form
document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("enquiry-modal");
    const openModalLinks = document.querySelectorAll(".open-modal");
    const closeModal = document.querySelector(".close-modal");
    const background = document.querySelector("body");

    // Ensure modal is hidden when the page loads
    modal.style.display = "none";

    // Open modal when any 'Project Enquiry' link is clicked
    openModalLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            modal.style.display = "flex";
            
            // Disable scrolling
            background.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";

        // Enable scrolling
        background.style.overflow = 'auto';
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

