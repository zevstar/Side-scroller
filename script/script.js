// const character = document.getElementById("character");
const image = document.getElementById("image");
const block = document.getElementById("block");

const score = document.getElementById("score");
const gameOver = document.getElementById("game-over");
let isDead = false;

let scoreCounter = 0;
function jump(){
    if(image.classList !== "animate"){
    image.classList.add("animate");
    }
    setTimeout(function(){
       image.classList.remove("animate");
           
    },500);
}
const upDateScore = setInterval(function (){
    if (!isDead){scoreCounter = scoreCounter +10; 
    score.textContent = scoreCounter;}
},2000);

const checkDead = setInterval(function(){
    const imageTop = parseInt(window.getComputedStyle(image).getPropertyValue("top"));

    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>0 && imageTop>=130){
            block.style.animation = "none";
            block.style.display = "none";
            isDead = true;
            // alert("You lose!");
            gameOver.textContent = "You lose!";
    }

},10);