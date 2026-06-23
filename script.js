let music;

window.onload = () => {
    music = document.getElementById("bgMusic");
};

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
"💛 Hoy es un buen día para ser feliz sin motivo",
"🚀 Que todo lo bueno te llegue sin que lo busques",
"🌙 Sigue brillando incluso en los días normales",
"💛 Siempre contaras conmigo",
];

function nuevoMensaje() {
    const random = mensajes[Math.floor(Math.random() * mensajes.length)];
    document.getElementById("mensajeAleatorio").innerText = random;
}

// FINAL
function finalCumple() {

    nextScreen(5);

    confetti({
        particleCount: 200,
        spread: 120
    });
}

function crearEstrella() {
    const star = document.createElement("div");
    star.innerText = "✨";
    star.style.position = "fixed";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = "-20px";
    star.style.fontSize = "18px";
    star.style.animation = "caer 3s linear forwards";
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 3000);
}

// estrellas constantes
setInterval(crearEstrella, 400);
