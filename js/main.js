// Language switching functionality
function switchLanguage(lang) {
    // In a real implementation, this would switch the content language
    const buttons = document.querySelectorAll('.language-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`.language-button[onclick="switchLanguage('${lang}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // This would actually change the content language
    console.log(`Switching to ${lang}`);
    
    // In a real implementation, you would load different language content
    // loadContent(lang);
}

// Function to load content from separate HTML files
document.addEventListener('DOMContentLoaded', function() {
    // Load features content
    // fetch('components/features.html')
    //     .then(response => response.text())
    //     .then(data => {
    //         document.querySelector('#features .features').innerHTML = data;
    //     });
    
    // // Load showcase content
    // fetch('components/showcase.html')
    //     .then(response => response.text())
    //     .then(data => {
    //         document.querySelector('#experience .showcase').innerHTML = data;
    //     });
    
    // // Load guide content
    // fetch('components/guide.html')
    //     .then(response => response.text())
    //     .then(data => {
    //         document.querySelector('#guide .download-guide').innerHTML = data;
    //     });
    
    // // Load FAQ content
    // fetch('components/faq.html')
    //     .then(response => response.text())
    //     .then(data => {
    //         document.querySelector('#faq').innerHTML = 
    //             '<h2>Frequently Asked Questions</h2>' + data;
    //     });
});

// Image gallery functionality
function setupGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Create a modal to show the full-size image
            const modal = document.createElement('div');
            modal.classList.add('modal');
            
            const img = this.querySelector('img').cloneNode();
            img.classList.add('modal-content');
            
            modal.appendChild(img);
            document.body.appendChild(modal);
            
            // Close modal when clicked
            modal.addEventListener('click', function() {
                this.remove();
            });
        });
    });
}

// Video player functionality
function setupVideoPlayers() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        // Add controls if not present
        if (!video.hasAttribute('controls')) {
            video.setAttribute('controls', '');
        }
        
        // Lazy loading for better performance
        video.setAttribute('loading', 'lazy');
    });
}

// Call setup functions after content is loaded
window.addEventListener('load', function() {
    setupGallery();
    setupVideoPlayers();
}); 