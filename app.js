let gameseq=[];
let userseq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game started");
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
})

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelup(){
    userseq=[];
    level ++;
    h2.innerText =`level ${level}`;
    
    // random button choose
    let randindx = Math.floor(Math.random()*4);
    let randcolor = btns[randindx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randbtn);
    // console.log(randcolor);
    // console.log(randindx);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkAns(idx){
    // console.log("curr level :", level);
    // let idx = level-1;


    if(userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length){
            setTimeout(levelup,1000)
            // levelup();
        }
        
    }
    else{
        h2.innerHTML =`GAME OVER! YOUR SCORE WAS <b>${level}</b> <br>PRESS ANY KEY TO START`;
        document.querySelector("body").style.color ="red";
        setTimeout(function(){
            document.querySelector("body").style.color ="white";
        },2000);
        reset();
    }
}

function btnPress(){
    // console.log('btn was clicked');
    // console.log(this);
    let btn =this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq = [];
    level =0;
}
