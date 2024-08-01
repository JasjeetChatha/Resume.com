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
}
