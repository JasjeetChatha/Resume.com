const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});
function downloadPDF() {
    // URL of the PDF file
    var pdfUrl = 'https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:94e4cb73-1998-3a60-bae7-fa25f71060c1';
    
    // Create a temporary link element
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Jasjeet_Resume.pdf'; // Name of the downloaded file
    
    // Append link to the body (not visible)
    document.body.appendChild(link);
    
    // Programmatically click the link
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);


    document.addEventListener('DOMContentLoaded', function() {
        // Get the form element
        const form = document.getElementById('contact-form');
    
        // Add an event listener for form submission
        form.addEventListener('submit', function(event) {
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
    
            // Regular expression for phone number validation (example format)
            const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    
            // Regular expression for email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
            // Flag to indicate if the form is valid
            let isValid = true;
    
            // Clear any previous errors
            document.querySelectorAll('.error-message').forEach(el => el.remove());
    
            // Validate name
            if (!name) {
                showError('name', 'Name is required');
                isValid = false;
            }
    
            // Validate email
            if (!email || !emailRegex.test(email)) {
                showError('email', 'Valid email is required');
                isValid = false;
            }
    
            // Validate phone number
            if (!phone || !phoneRegex.test(phone)) {
                showError('phone', 'Valid phone number is required');
                isValid = false;
            }
    
            // Validate message
            if (!message) {
                showError('message', 'Message is required');
                isValid = false;
            }
    
            // If the form is not valid, prevent submission
            if (!isValid) {
                event.preventDefault();
            }
        });
    
        // Function to display an error message
        function showError(fieldId, message) {
            const field = document.getElementById(fieldId);
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = message;
            field.parentElement.insertBefore(errorMessage, field.nextSibling);
        }
    });
    
}
