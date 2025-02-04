const boxes = document.querySelectorAll(".box");
const playerturn = document.querySelector(".playerturn");
const message = document.querySelector(".message");
const resetvalue = document.querySelector(".reset");
// const value = document.ATTRIBUTE_NODE('#id');
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  [8, 4, 0],
  [6, 4, 2],
];

let originally = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let currentplayer = "X";
let ongoinggame = false;

init();

// initializing
function init() {
  boxes.forEach((box) => box.addEventListener("click", clicked));
  resetvalue.addEventListener("click", reset);
  playerturn.textContent = ` ${currentplayer}'s turn:`;
  ongoinggame = true;
}
// onclicking
function clicked() {
    if(!ongoinggame)
         return;
  const id = this.getAttribute("id");
  if (originally[id] !== " ") {
    return;
  } else updatebox(id, this);
  checkWinner()
  if (ongoinggame) {
    changeplayer();
  }
  
//   checktie();

  console.log(originally);
}

// reset
function reset() {
  originally = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  playerturn.textContent = `${currentplayer}'s turn:`;
  currentplayer = "X";
  message.textContent = "";
  boxes.forEach((box) => (box.textContent = " "));
  ongoinggame = true;
}

// changing player
function changeplayer() {
  currentplayer = currentplayer == "X" ? "O" : "X";
  playerturn.textContent = `${currentplayer}'s turn:`;
}

// update box
function updatebox(id, box) {
  originally[id] = currentplayer;
  box.textContent = currentplayer;
}

// checking winner
function checkWinner() {
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    console.log(a, b, c);

    if (
      originally[a] === currentplayer &&
      originally[b] === currentplayer &&
      originally[c] === currentplayer
    ) {
      console.log("entered");

      message.textContent = `Hurreyyyy!!!!! ${currentplayer} is winner`;
      ongoinggame = false;
      return;
    } 
      checktie();
  }
}
function checktie() { 
    if (!originally.includes(" ") && ongoinggame) {
         (message.textContent = `its a tie. RESTART THE GAME?`);
        ongoinggame = false;
    } 
  }

