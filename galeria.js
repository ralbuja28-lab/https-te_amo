document.querySelectorAll('.c-card').forEach((card) => {
    card.addEventListener('mouseover', () => {
        document.querySelector('.hero-portfolio--grid').classList.add('is-focus');
        document.querySelectorAll('.c-card').forEach((c) => {
            if (c !== card) c.classList.add('no-focus');
        });
    });

    card.addEventListener('mouseleave', () => {
        document.querySelector('.hero-portfolio--grid').classList.remove('is-focus');
        document.querySelectorAll('.c-card').forEach((c) => {
            c.classList.remove('no-focus');
        });
    });
});
// --- LÓGICA DE LA MÚSICA ---
// La ruta ahora apunta a tu carpeta Audio
const cancion = new Audio('Audio/Daylight.mp3'); 
cancion.loop = true;

const btnMusica = document.getElementById('music-btn');

btnMusica.addEventListener('click', () => {
    if (cancion.paused) {
        cancion.play().catch(error => console.log("Esperando interacción..."));
        btnMusica.textContent = '⏸️';
        btnMusica.classList.add('is-playing');
    } else {
        cancion.pause();
        btnMusica.textContent = '🎵';
        btnMusica.classList.remove('is-playing');
    }
});

// --- TU LÓGICA DE TARJETAS (Mantenla abajo) ---
document.querySelectorAll('.c-card').forEach((card) => {
    card.addEventListener('mouseover', () => {
        document.querySelector('.hero-portfolio--grid').classList.add('is-focus');
        document.querySelectorAll('.c-card').forEach((c) => {
            if (c !== card) c.classList.add('no-focus');
        });
    });

    card.addEventListener('mouseleave', () => {
        document.querySelector('.hero-portfolio--grid').classList.remove('is-focus');
        document.querySelectorAll('.c-card').forEach((c) => {
            c.classList.remove('no-focus');
        });
    });
});