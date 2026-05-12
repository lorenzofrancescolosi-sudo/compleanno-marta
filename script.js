const btn = document.getElementById('surprise-btn');
const overlay = document.getElementById('surprise-overlay');
const imgLarge = document.getElementById('surprise-img-large');
const audio = document.getElementById('birthday-audio'); // Seleziona l'audio

// --- LOGICA ALTERNANZA IMMAGINI REGALO ---
const giftImages = document.querySelectorAll('.gift-img');
let currentGiftIndex = 0;

setInterval(() => {
    // Rimuovi active dall'immagine corrente per farla svanire
    giftImages[currentGiftIndex].classList.remove('active');
    
    // Passa alla successiva
    currentGiftIndex = (currentGiftIndex + 1) % giftImages.length;
    
    // Aggiungi active alla nuova per farla apparire
    giftImages[currentGiftIndex].classList.add('active');
}, 4500); // Cambia immagine ogni 4.5 secondi

btn.addEventListener('click', () => {
    // --- PARTE AUDIO ---
    audio.currentTime = 0; // Ricomincia dall'inizio
    audio.play();

    // Ferma l'audio esattamente a 41 secondi
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; 
    }, 41000); // 41.000 millisecondi = 41 secondi

    // --- PARTE VISIVA ---
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#03a9f4', '#ff4081', '#ffffff', '#ffd54f']
    });

    overlay.classList.remove('overlay-hidden');
    overlay.classList.add('overlay-visible');
    imgLarge.classList.remove('animate-appear-rotate', 'animate-fade-out');
    
    void imgLarge.offsetWidth; 

    // L'immagine appare e ruota (durata gestita nel CSS)
    imgLarge.classList.add('animate-appear-rotate');

    // --- LOGICA DEI 41 SECONDI ---
    // Avviamo la dissolvenza dell'immagine a 40 secondi, 
    // così ci mette 1 secondo a svanire e il processo totale finisce a 41.
    
    setTimeout(() => {
        imgLarge.classList.add('animate-fade-out');
    }, 40000); // 40.000 ms = 40 secondi

    // A 41 secondi tondi (41.000 ms) nascondiamo del tutto la schermata
    setTimeout(() => {
        overlay.classList.remove('overlay-visible');
        overlay.classList.add('overlay-hidden');
    }, 41000); 
});