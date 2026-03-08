// 1. Configurar el audio
const cancion = new Audio('flightless-bird.mp3'); 
cancion.loop = true;

const musicBtn = document.getElementById('music-btn');

// 2. Lógica del botón de música
musicBtn.addEventListener('click', function(e) {
    // e.stopPropagation() evita que el clic "suba" al document
    e.stopPropagation(); 

    if (cancion.paused) {
        cancion.play();
        musicBtn.textContent = '⏸️';
        musicBtn.classList.add('is-playing');
    } else {
        cancion.pause();
        musicBtn.textContent = '🎵';
        musicBtn.classList.remove('is-playing');
    }
});

// 3. Tu evento original de redirección
document.addEventListener('click', function() {
    window.location.href = 'carta.html';
});