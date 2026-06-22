let currentScreen = 1;
const music = document.getElementById("bgMusic");

// CAMBIAR PANTALLA
function nextScreen(num) {

    document.querySelectorAll(".screen").forEach(s => {
        s.classList.remove("active");
    });

    document.getElementById("pantalla" + num).classList.add("active");
    currentScreen = num;
}

// INICIAR (y música)
function iniciarExperiencia() {
    music.play();
    nextScreen(2);
}

// TOGGLE MUSICA
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// MENSAJES ALEATORIOS
const mensajes = [
"✨ Que tengas un año lleno de cosas bonitas",
"🎂 Hoy es tu día, disfrútalo al máximo",
"🍀 La suerte está de tu lado",
"🌟 Nunca dejes de sonreír",
"🐶 El perrito dice: feliz cumpleaños!",
"🎈 Que todos tus deseos se cumplan"
];

function nuevoMensaje() {
    const random = mensajes[Math.floor(Math.random() * mensajes.length)];
    document.getElementById("mensajeAleatorio").innerText = random;
}

// FINAL
function finalCumple() {

    confetti({
        particleCount: 200,
        spread: 120
    });

    alert("🎉 ¡Feliz Cumpleaños Korina! 🎂");
}
