const startDate = new Date('March 31, 2023 00:00:00').getTime();

// RELOJ
function updateTimer() {
    const diff = new Date().getTime() - startDate;
    document.getElementById('days').innerText = Math.floor(diff / (86400000));
    document.getElementById('hours').innerText = Math.floor((diff % 86400000) / 3600000);
    document.getElementById('minutes').innerText = Math.floor((diff % 3600000) / 60000);
    document.getElementById('seconds').innerText = Math.floor((diff % 60000) / 1000);
}
setInterval(updateTimer, 1000);
updateTimer();

// ÁRBOL FRONDOSO
const canopy = document.getElementById('canopy');

function createTree() {
    const totalHearts = 620; // Muchos más corazones
    for (let i = 0; i < totalHearts; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'heart-leaf';

        
        
        // Forma de copa orgánica (distribución radial)
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 150;
        const x = Math.cos(angle) * radius;
        // Dentro de la función createFrondoseTree
const y = (Math.sin(angle) * (radius * 1)) - (radius * 0.3); 
// Reducimos un poco el factor de elevación para que la copa no suba tanto hacia los botones        
        leaf.style.left = `${x}px`;
        leaf.style.top = `${y}px`;
        
        // Variación de colores para realismo de neón
        const colors = ['#ff0000', '#ff4d4d', '#cc0000', '#ff1a1a'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        leaf.style.backgroundColor = randomColor;
        
        // Retraso aleatorio para que "crezca" poco a poco
        leaf.style.animationDelay = `${Math.random() * 4}s`;
        
        canopy.appendChild(leaf);
    }
}

window.onload = createTree;
// LÓGICA DE BOTONES
let scaleAcepto = 1;
let scaleNo = 1;
const btnAcepto = document.getElementById('btnAcepto');
const btnNo = document.getElementById('btnNoAcepto');

btnNo.addEventListener('click', () => {
    scaleAcepto += 0.5; // El botón SI crece un 50%
    scaleNo -= 0.2;     // El botón NO se encoge un 20%
    
    btnAcepto.style.transform = `scale(${scaleAcepto})`;
    btnNo.style.transform = `scale(${scaleNo})`;
    
    if (scaleNo <= 0.1) {
        btnNo.style.display = 'none'; // Desaparece cuando es muy chico
    }
});

btnAcepto.addEventListener('click', () => {
    window.location.href = 'final.html';
});