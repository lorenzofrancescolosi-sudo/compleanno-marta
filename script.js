const btn = document.getElementById('confetti-btn');

btn.addEventListener('click', () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff00de', '#ffbd00', '#00ff0a', '#ffffff']
    });
});

// Opzionale: lancia i coriandoli all'apertura
window.onload = () => {
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 160,
        });
    }, 500);
};
