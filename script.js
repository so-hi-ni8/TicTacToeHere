console.log("Welcome To TicTacToeHere");
let music = new Audio("dingaudio.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// func to change turn
const changeTurn = ()=>{
    return turn === "X"? "O": "X";
}

//Func to check for win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90,],
        [2,5,8,10,15,90,],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML !== "")){
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerHTML + " Won!!"; 
            isgameover = true;  
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
            document.querySelector(".line").style.width ="30vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`                                                                                                                                                                                                                                                                                                                                                                       
        }
    })
}

//Game Logic...(how to change turns, which buttons to use for events)
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    console.log(boxtext);
    element.addEventListener('click', ()=>{
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            music.play();
            checkwin();
            if(!isgameover)
              document.getElementsByClassName("info")[0].innerHTML = turn +"'s Turn!";
            if(isgameover)
               gameover.play();
        }
    })
})

//Add oneclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerHTML="";
    });
    turn="X";
    isgameover = false;
    document.querySelector(".line").style.width ="0vw";
    document.getElementsByClassName("info")[0].innerHTML = turn +"'s Turn!";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})