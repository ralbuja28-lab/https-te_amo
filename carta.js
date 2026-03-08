$(document).ready(function () {
    // Animación del sobre (la que ya tienes)
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    // --- NUEVO: Redirigir a la galería al decir que SÍ ---
    $('#btn-si').click(function() {
        window.location.href = 'galeria.html';
    });

    // Lógica del botón NO (el que escapa)
    $('#btn-no').mouseover(function() {
        const padding = 50;
        const newX = Math.random() * (window.innerWidth - $(this).width() - padding);
        const newY = Math.random() * (window.innerHeight - $(this).height() - padding);
        $(this).css({
            position: 'fixed',
            left: newX + 'px',
            top: newY + 'px',
            zIndex: 1000
        });
    });
});