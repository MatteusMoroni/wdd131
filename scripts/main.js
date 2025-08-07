/*
    Description: Main JavaScript file for the portfolio website.
*/

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Function to dynamically update the copyright year in the footer.
     * This demonstrates DOM selection and modification.
     */
    function updateCopyrightYear() {
        const yearSpan = document.querySelector('footer p');
        if (yearSpan) {
            const currentYear = new Date().getFullYear();
            // Using a template literal to build the string
            yearSpan.textContent = `© ${currentYear} My Portfolio. All Rights Reserved.`;
        }
    }

    /**
     * Function to handle the contact form submission.
     * This demonstrates event listening, objects, and localStorage.
     */
    function handleContactForm() {
        const contactForm = document.querySelector('#contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (event) => {
                // Prevent the default form submission behavior
                event.preventDefault();

                // Create an object to hold the form data
                const formData = {
                    name: event.target.name.value,
                    email: event.target.email.value,
                    message: event.target.message.value,
                    submittedAt: new Date().toISOString()
                };

                
                console.log(`Form submitted by: ${formData.name}`);
                alert('Thank you for your message! I will get back to you soon.');


                let submissionCount = localStorage.getItem('formSubmissions');
                
                
                if (submissionCount) {
                    submissionCount = parseInt(submissionCount, 10) + 1;
                } else {
                    submissionCount = 1;
                }

                localStorage.setItem('formSubmissions', submissionCount);
                console.log(`This form has been submitted ${submissionCount} time(s).`);

                // Reset the form after submission
                contactForm.reset();
            });
        }
    }

    /**
     * Function to initialize lazy loading for images.
     * This demonstrates IntersectionObserver, arrays, and array methods.
     */
    function initLazyLoading() {
        // Select all images that have a 'data-src' attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        // If there are no lazy images, exit the function
        if (lazyImages.length === 0) {
            return;
        }

        const lazyLoad = (target) => {
            const io = new IntersectionObserver((entries, observer) => {
                // Using an array method to loop through entries
                entries.forEach(entry => {
                    // If the image is in the viewport
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');

                        img.setAttribute('src', src);
                        img.classList.add('fade-in'); // Optional: for a fade-in effect

                        // Stop observing the image once it has loaded
                        observer.unobserve(img);
                    }
                });
            });

            io.observe(target);
        };

        // Apply the lazy load observer to each image
        lazyImages.forEach(lazyLoad);
    }


    // --- Initialize all functions ---
    updateCopyrightYear();
    handleContactForm();
    initLazyLoading();

});

