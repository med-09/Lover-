// ===== SIDEBAR =====

const menus = document.querySelectorAll(".menu");
const pages = document.querySelectorAll(".page");

menus.forEach((menu,index)=>{

menu.addEventListener("click",()=>{

menus.forEach(m=>m.classList.remove("active"));
pages.forEach(p=>p.classList.remove("active"));

menu.classList.add("active");
pages[index].classList.add("active");

});

});

// ===== START BUTTON =====

const start=document.getElementById("startButton");

if(start){

start.onclick=()=>{

document.querySelectorAll(".menu")[1].click();

};

}

// ===== HEART GAME =====

const game=document.querySelector(".game-area");
const scoreText=document.querySelector(".score");

let score=0;

if(game){

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*90+"%";

heart.style.top="-60px";

heart.onclick=()=>{

score++;

if(scoreText){

scoreText.innerHTML="Score : "+score;

}

heart.remove();

if(score==20){

alert("💖 Congratulations Arwa! You collected all my love! 💖");

}

};

game.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,800);

}

// ===== LOVE QUIZ =====

const answers=document.querySelectorAll(".answer");

answers.forEach(btn=>{

btn.onclick=()=>{

const result=document.querySelector(".result");

if(!result) return;

if(btn.dataset.correct=="yes"){

result.innerHTML="❤️ Correct! My heart always belongs to Arwa ❤️";

}else{

result.innerHTML="🥺 Wrong answer... Try again my princess.";

}

};

});

// ===== SURPRISE =====

const surprise=document.getElementById("surpriseButton");

if(surprise){

surprise.onclick=()=>{

document.getElementById("gift").style.display="block";

surprise.style.display="none";

};

}

// ===== FLOATING HEARTS =====

function floatingHeart(){

const h=document.createElement("div");

h.className="floating-heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*25)+"px";

h.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},10000);

}

setInterval(floatingHeart,700);

// ===== TITLE =====

let title=true;

setInterval(()=>{

document.title=title
?"❤️ For Arwa ❤️"
:"💖 I Love You Arwa 💖";

title=!title;

},2000);
