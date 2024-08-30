document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    if (!toggleButton) {
        console.error('Le bouton avec l\'ID "toggle-dark-mode" est introuvable.');
        return;
    }
    
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        toggleButton.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            toggleButton.textContent = ' ☀️';
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            toggleButton.textContent = '🌙'; 
        }
    });

    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.classList.add('dark-mode');
        toggleButton.textContent = ' ☀️';
    }
});



