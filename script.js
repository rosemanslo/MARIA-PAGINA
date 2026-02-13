const btnNo = document.getElementById('btnNo');
const btnSi = document.getElementById('btnPerdon');

const moverBoton = () => {
    // La primera vez que se mueve, lo sacamos del flujo normal
    if (btnNo.style.position !== 'absolute') {
        btnNo.style.position = 'absolute';
    }

    // Calculamos el área segura (evitando bordes)
    const padding = 20;
    const maxX = window.innerWidth - btnNo.clientWidth - padding;
    const maxY = window.innerHeight - btnNo.clientHeight - padding;

    // Generar posiciones aleatorias
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    // Evitar el centro (donde está el corazón y el botón Sí)
    const centroX = window.innerWidth / 2;
    const centroY = window.innerHeight / 2;

    if (Math.abs(randomX - centroX) < 150 && Math.abs(randomY - centroY) < 150) {
        randomX = randomX < centroX ? randomX - 150 : randomX + 150;
        randomY = randomY < centroY ? randomY - 150 : randomY + 150;
    }

    // Asegurar que no se salga de la pantalla tras el ajuste del centro
    randomX = Math.max(padding, Math.min(randomX, maxX));
    randomY = Math.max(padding, Math.min(randomY, maxY));

    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
};

// Eventos
btnNo.addEventListener('mouseenter', moverBoton);
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    moverBoton();
});
btnNo.addEventListener('click', moverBoton);

btnSi.addEventListener('click', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'success.html';
    }, 500);
});