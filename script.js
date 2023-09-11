console.log("Welcome To TicTacToeHere");
let music = new Audio("dingaudio.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
let countMoves = 0;
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
    let counter = 0;
    countMoves++;
    let makeVisible = ""; // also use it  as a flag variable

    wins.forEach(e =>{
        //winning condition
        if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML !== "")){
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerHTML + " Won!!"; 
            isgameover = true;  
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
            // document.querySelector(".line").style.width ="30vw";
            // managing lines
            if(counter===0){
                makeVisible=".row-1";
            }
            else if(counter===1){
                makeVisible=".row-2";
            }
            else if(counter===2){
                makeVisible=".row-3";
            }
            else if(counter===3){
                makeVisible=".col-1";
            }
            else if(counter===4){
                makeVisible=".col-2";
            }
            else if(counter===5){
                makeVisible=".col-3";
            }
            else if(counter===6){
                makeVisible=".ld";
            }
            else if(counter===7){
                makeVisible=".rd";
            }

            if(makeVisible){
                console.log(makeVisible);
                document.querySelector(makeVisible).style.visibility = "visible";                                                                                                                                                                                                                                                                                                                                                                      
            }
        }
        counter++;
    });
    if(countMoves === 9 && makeVisible === ""){
        document.querySelector('.info').innerHTML = "Draw!"; 
        isgameover=true; 
        countMoves=0;
    }
}

//Game Logic...(how to change turns, which buttons to use for events)
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            music.play();
            checkwin();
            if(!isgameover)
              document.getElementsByClassName("info")[0].innerHTML = turn +"'s Turn!";
            if(isgameover){
               gameover.play();
               countMoves=0;
            }
        }
    });
});

//Add oneclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerHTML="";
    });
    turn="X";
    isgameover = false;
    countMoves = 0;
    document.querySelector(".col-1").style.visibility="hidden";
    document.querySelector(".col-2").style.visibility="hidden";
    document.querySelector(".col-3").style.visibility="hidden";
    document.querySelector(".row-1").style.visibility="hidden";
    document.querySelector(".row-2").style.visibility="hidden";
    document.querySelector(".row-3").style.visibility="hidden";
    document.querySelector(".ld").style.visibility="hidden";
    document.querySelector(".rd").style.visibility="hidden";
    document.getElementsByClassName("info")[0].innerHTML = turn +"'s Turn!";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});