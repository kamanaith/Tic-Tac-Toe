const boxes = document.querySelectorAll('.box');
const playerturn = document.querySelector('.playerturn');
const message = document.querySelector('.message');
const resetvalue =document.querySelector('.reset');
// const value = document.ATTRIBUTE_NODE('#id');
let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [8,4,0],
    [6,4,2]
];

let originally = [" "," "," "," "," "," "," "," "," "];
let currentplayer = "X";
let ongoinggame = false;

init();

// initializing
function init(){
    boxes.forEach(box=> box.addEventListener("click", clicked ))};
    resetvalue.addEventListener("click", reset );
    playerturn.textContent =` ${currentplayer}`;
    ongoinggame = true;
;

// onclicking
function clicked(){
const id = this.getAttribute("id");
if (originally[id] != " ") {
    return;
}
else
updatebox(id , this);
changeplayer();
checkWinner();


};

// reset
function reset(){
     originally = [" "," "," "," "," "," "," "," "," "];
     playerturn.textContent = `${currentplayer}`;
     currentplayer = "X";
     boxes.forEach(box => box.textContent = " ");
     ongoinggame = true;
};

// changing player
function changeplayer(){
   currentplayer = (currentplayer == "X")? "O" : "X";
   playerturn.textContent = `${currentplayer}`;
};

// update box
function updatebox(id , box){
    originally[id] = currentplayer;
    box.textContent = currentplayer;
}

// checking winner
function checkWinner(){

};

