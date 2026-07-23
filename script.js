// =====================
// ELEMENTS
// =====================

const dateScreen = document.getElementById("dateScreen");
const passcodeScreen = document.getElementById("passcodeScreen");
const loadingScreen = document.getElementById("loadingScreen");
const envelopeScreen = document.getElementById("envelopeScreen");
const cakeScreen = document.getElementById("cakeScreen");
const heroScreen = document.getElementById("heroScreen");
const letterScreen = document.getElementById("letterScreen");
const galleryScreen = document.getElementById("galleryScreen");

const music = document.getElementById("bgMusic");
const display = document.getElementById("display");
const error = document.getElementById("error");
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

let width, height;
let fireworks = [];
let particles = [];
let fireLoop = null;
// =====================
// PASSCODE
// =====================

let enteredPass = "";
const correctPass = "2608";

// =====================
// SHOW PASSCODE
// =====================

function showPasscode() {
    hideAll();
    passcodeScreen.style.display = "flex";
}

// =====================
// DIGITS
// =====================

function addDigit(num) {

    if (enteredPass.length >= 4) return;

    enteredPass += num;

    let dots = "";

    for (let i = 0; i < enteredPass.length; i++) {
        dots += "● ";
    }

    display.innerHTML = dots;
}

function clearPass() {

    enteredPass = enteredPass.slice(0, -1);

    let dots = "";

    for (let i = 0; i < enteredPass.length; i++) {
        dots += "● ";
    }

    display.innerHTML = dots || "● ● ● ●";
}

// =====================
// CHECK PASS
// =====================

function checkPass() {

    if (enteredPass === correctPass) {

        error.innerHTML = "";

        hideAll();

        loadingScreen.style.display = "flex";

        if (music) {
            music.play().catch(() => {});
        }

        setTimeout(() => {

            hideAll();

            envelopeScreen.style.display = "flex";

        }, 4000);

    } else {

        error.innerHTML = "Wrong Passcode 😒";

        enteredPass = "";

        display.innerHTML = "● ● ● ●";
    }
}

// =====================
// ENVELOPE
// =====================

function openEnvelope() {

    hideAll();

    cakeScreen.style.display = "flex";
}

// =====================
// HERO
// =====================
function showHero() {

    cakeScreen.classList.add("dark");

    setTimeout(() => {

        initFireworks();

        fireLoop = setInterval(() => {
            fireworks.push(new Rocket());
        }, 300);

        animateFireworks();

    }, 800);

    setTimeout(() => {

        hideAll();
        heroScreen.style.display = "flex";

        // CONFETTI
        const duration = 6000;
        const end = Date.now() + duration;

        (function frame() {

            confetti({
                particleCount: 15,
                angle: 60,
                spread: 90,
                origin: { x: 0 }
            });

            confetti({
                particleCount: 15,
                angle: 120,
                spread: 90,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }

        })();

    }, 2500);

    setTimeout(() => {

        clearInterval(fireLoop);
        canvas.style.display = "none";

    }, 9000);

}
// =====================
// LETTER
// =====================

function showLetter() {

    hideAll();

    letterScreen.style.display = "block";

    window.scrollTo(0, 0);
}

// =====================
// GALLERY
// =====================

function showGallery() {

    hideAll();

    galleryScreen.style.display = "block";

    window.scrollTo(0, 0);
}

// =====================
// HIDE ALL
// =====================

function hideAll() {

    dateScreen.style.display = "none";
    passcodeScreen.style.display = "none";
    loadingScreen.style.display = "none";
    envelopeScreen.style.display = "none";
    cakeScreen.style.display = "none";
    heroScreen.style.display = "none";
    letterScreen.style.display = "none";
    galleryScreen.style.display = "none";
}

// =====================
// HEARTS
// =====================

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.zIndex = "999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0)",
                opacity: 1
            },
            {
                transform: "translateY(-120vh)",
                opacity: 0
            }
        ],
        {
            duration: 7000
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 7000);

}, 800);

// =====================
// START
// =====================
// =====================
// FIREWORKS ENGINE
// =====================

function initFireworks(){

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;

    canvas.style.display = "block";

    ctx.setTransform(1,0,0,1,0,0);
    ctx.scale(devicePixelRatio,devicePixelRatio);

    window.addEventListener("resize",()=>{

        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;

        ctx.setTransform(1,0,0,1,0,0);
        ctx.scale(devicePixelRatio,devicePixelRatio);

    });

}

class Particle{

    constructor(x,y,color){

        this.x=x;
        this.y=y;
        this.color=color;

        const angle=Math.random()*Math.PI*2;
        const speed=Math.random()*4;

        this.vx=Math.cos(angle)*speed;
        this.vy=Math.sin(angle)*speed;

        this.life=0;

    }

    update(){

        this.x+=this.vx;
        this.y+=this.vy;

        this.vy+=0.03;

        this.vx*=0.99;
        this.vy*=0.99;

        this.life++;

    }

    draw(){

        ctx.globalAlpha=Math.max(1-this.life/80,0);
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,2,2);

    }

}

class Rocket{

    constructor(){

        this.x=Math.random()*width;
        this.y=height;

        this.color=`hsl(${Math.random()*360},100%,60%)`;

        this.done=false;

    }

    update(){

        this.y-=5;

        if(this.y<150+Math.random()*200){

            this.done=true;

            for(let i=0;i<80;i++){

                particles.push(
                    new Particle(this.x,this.y,this.color)
                );

            }

        }

    }

    draw(){

        ctx.globalAlpha=1;
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,3,8);

    }

}
