const passwordInput = document.querySelector(".password-input");
const lockScreen = document.getElementById("lock-screen");
const apple = document.getElementById("apple");

const biteSound = new Audio("./apple_ate.mp3");

passwordInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter" && passwordInput.value==="nira-gyouza"){

biteSound.currentTime=0;
biteSound.play();

apple.src="apple_already.png";

setTimeout(()=>{
lockScreen.classList.add("fade-out");
},200);

setTimeout(()=>{

lockScreen.style.display="none";

document.body.style.overflow="auto";

document.querySelector(".portfolio").classList.add("show");

},1200);

}

});


const ufo = document.querySelector(".ufo");

function moveUFO(){

const hero = document.querySelector(".portfolio-hero");

const heroWidth = hero.offsetWidth;
const heroHeight = hero.offsetHeight;

const x = Math.random() * (heroWidth * 0.7);
const y = Math.random() * (heroHeight * 0.3);

ufo.style.transform = `translate(${x}px, ${y}px)`;

}

setInterval(moveUFO,2000);
