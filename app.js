document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const moodTracker = document.getElementById('mood-tracker');
    moodTracker.addEventListener('click', function() {
        alert('Funzionalità di tracciamento dell\'umore in arrivo!');
    });

    // Funzione per gestire il tema chiaro/scuro
    const toggleTheme = () => {
        const currentTheme = document.body.style.backgroundColor === 'var(--background-light)' ? 'light' : 'dark';
        if (currentTheme === 'light') {
            document.body.style.backgroundColor = 'var(--background-dark)';
            document.body.style.color = 'var(--text-dark)';
        } else {
            document.body.style.backgroundColor = 'var(--background-light)';
            document.body.style.color = 'var(--text-light)';
        }
    };

    const themeToggleButton = document.createElement('button');
    themeToggleButton.innerText = 'Cambia Tema';
    themeToggleButton.addEventListener('click', toggleTheme);
    document.body.appendChild(themeToggleButton);

    // Gestione del localStorage
    const saveMood = (mood) => {
        localStorage.setItem('mood', mood);
    };

    const loadMood = () => {
        const savedMood = localStorage.getItem('mood');
        if (savedMood) {
            console.log(`Umore salvato: ${savedMood}`);
        }
    };

    loadMood();
});