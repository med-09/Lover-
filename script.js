// ==========================
// PAGE NAVIGATION
// ==========================

const menuButtons = document.querySelectorAll(".menu-btn");
const pages = document.querySelectorAll(".page");

menuButtons.forEach(button => {

button.addEventListener("click", () => {

menuButtons.forEach(btn => btn.classList.remove("active"));
button.classList.add("active");

const target = button.dataset.page;

pages.forEach(page => {

page.classList.remove("active");

if(page.id === target){

page.classList.add("active");

}

});

});

});

// ==========================
// START BUTTON
// ==========================

const startButton = document.getElementById("startButton");

if(startButton){

startButton.addEventListener("click",()=>{

document.querySelector('[data-page="game"]').click();

});

}

// ==========================
// HEART GAME
// ==========================

const gameArea = document.querySelector(".game-area");
const scoreText = document.getElementById("score");

let score = 0;

function createHeart(){

if(!gameArea) return;

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "💖";

heart.style.left = Math.random()*90+"%";

heart.style.top = "-40px";

gameArea.appendChild(heart);

heart.addEventListener("click",()=>{

score++;

scoreText.textContent = score;

heart.remove();

});

let topPos = -40;

const fall = setInterval(()=>{

topPos += 3;

heart.style.top = topPos+"px";

if(topPos>gameArea.offsetHeight){

heart.remove();

clearInterval(fall);

}

},20);

}

if(gameArea){

setInterval(createHeart,900);

}

// ==========================
// SURPRISE BUTTON
// ==========================

const surpriseButton=document.getElementById("surpriseButton");
const gift=document.getElementById("gift");

if(surpriseButton){

surpriseButton.addEventListener("click",()=>{

gift.style.display="block";

gift.scrollIntoView({

behavior:"smooth"

});

surpriseButton.style.display="none";

});

}

// ==========================
// FLOATING HEARTS
// ==========================

const bg=document.querySelector(".background-hearts");

if(bg){

setInterval(()=>{

const heart=document.createElement("span");

heart.innerHTML=["💖","💕","💗","💓","🌸"][Math.floor(Math.random()*5)];

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.pointerEvents="none";
heart.style.zIndex="-1";
heart.style.opacity=".7";

document.body.appendChild(heart);

let y=100;

const move=setInterval(()=>{

y-=1;

heart.style.top=y+"vh";

if(y<-10){

heart.remove();

clearInterval(move);

}

},30);

},700);
  }
