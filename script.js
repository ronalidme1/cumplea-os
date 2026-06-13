function nextScreen(numero){

document.querySelectorAll(".screen").forEach(s=>{
s.classList.remove("active");
});

document
.getElementById("pantalla"+numero)
.classList.add("active");

if(numero===4){
escribirMensaje();
}
}

const texto = `
Hoy es tu cumpleaños y quería aprovechar
para desearte que tengas un día increíble.

Que disfrutes mucho cada momento,
que recibas muchas sonrisas
y que este nuevo año de vida venga acompañado
de cosas buenas.

Sigue persiguiendo tus metas
y disfrutando cada etapa que te toque vivir.

✨ Feliz cumpleaños. ✨
`;

function escribirMensaje(){

let i=0;

const mensaje =
document.getElementById("mensaje");

mensaje.innerHTML="";

const intervalo=setInterval(()=>{

mensaje.innerHTML += texto.charAt(i);

i++;

if(i>=texto.length){
clearInterval(intervalo);
}

},35);

}

function mostrarSorpresa(){

document.getElementById("popup").style.display="flex";

confetti({
    particleCount:150,
    spread:120,
    origin:{y:0.6}
});

}

function cerrarPopup(){
document.getElementById("popup").style.display="none";
}

for(let i=0;i<40;i++){

let p=document.createElement("div");

p.classList.add("particle");

p.style.left=Math.random()*100+"%";

p.style.animationDuration=
(4+Math.random()*6)+"s";

p.style.opacity=Math.random();

document
.getElementById("particles")
.appendChild(p);
}

function abrirSobre(){

const sobre =
document.querySelector(".envelope");

sobre.classList.add("abierto");

setTimeout(()=>{

nextScreen(4);

},1500);

}
