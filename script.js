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
    const closeModal = document.querySelector(".close-enquiry-modal");
    const modalBackground = document.querySelector(".modal-background");
    const body = document.querySelector("body");

    // Ensure modal is hidden when the page loads
    modalBackground.style.display = "none";

    // Open modal when any 'Project Enquiry' link is clicked
    openModalLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            modalBackground.style.display = "flex";
            modal.style.display = "block";
            
            // Disable scrolling
            body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", function () {
        modalBackground.style.display = "none";
        modal.style.display = "none";

        // Enable scrolling
        body.style.overflow = 'auto';
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modalBackground.style.display = "none";
            modal.style.display = "none";
            body.style.overflow = 'auto';
        }
    });
});

// Sroll buttons for featured work and projects
const scrollContainer = document.querySelector('.scroll-container');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

// Scroll amount (adjust based on card width)
const scrollAmount = 400; 

// Scroll left function
scrollLeftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// Scroll right function
scrollRightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Detect manual scrolling and update button states
scrollContainer.addEventListener('scroll', () => {
    const scrollLeft = scrollContainer.scrollLeft;
    if (scrollLeft === 0) {
        scrollLeftButton.classList.remove('active'); // Hide left button when at start
    } else if (scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollRightButton.classList.remove('active'); // Hide right button when at end
    } else {
        scrollLeftButton.classList.add('active');
        scrollRightButton.classList.add('active');
    }
});