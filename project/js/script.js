// Simple JavaScript for demonstration
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Button functionality
    const demoButton = document.createElement('button');
    demoButton.textContent = 'Натисни мене';
    demoButton.className = 'demo-button';
    demoButton.addEventListener('click', function() {
        alert('Ви натиснули кнопку!');
    });
    
    const buttonContainer = document.querySelector('#multimedia');
    if (buttonContainer) {
        buttonContainer.appendChild(demoButton);
    }
});

// Additional styles for the demo button
const style = document.createElement('style');
style.textContent = `
    .demo-button {
        display: block;
        margin: 20px auto;
        padding: 10px 20px;
        background-color: var(--accent-color);
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .demo-button:hover {
        background-color: var(--secondary-color);
    }
`;
document.head.appendChild(style);