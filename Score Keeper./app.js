const p1 = {
    score: 0,
    button: document.querySelector(".player-1-btn"),
    display: document.querySelector('.player-1')
}
const p2 = {
    score: 0,
    button: document.querySelector(".player-2-btn"),
    display: document.querySelector('.player-2')
}

const maxScore = document.querySelector("#range");
const r = document.querySelector('.reset');
let maximumScore=maxScore.value;
let isGameOver = false;

p1.button.addEventListener('click',()=>{
    add(p1,p2);
});
p2.button.addEventListener('click',()=>{
    add(p2,p1);
});
r.addEventListener('click',reset);
maxScore.addEventListener('change',max);

function add(player, opponent){
    if(!isGameOver){ 
        player.score++;
        player.display.textContent=player.score;
        if(player.score==maximumScore){
            player.display.style.color='green';
            opponent.display.style.color='red';
            isGameOver=true;
        }
    }
}
function reset(){
    for(let p of [p1,p2]){
        p.score=0;
        p.display.innerText=0;
        isGameOver=false;
        p.display.style.color='black';
    }
}

function max(e){
    maximumScore=this.value;
    reset();
}
