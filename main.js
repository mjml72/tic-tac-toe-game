const cells = document.getElementsByClassName("cells");
const player = document.getElementById("player");
const startBtn = document.getElementById("start");
let countPlay = 0;
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
let gameOver = false;

startBtn.addEventListener("click", ()=>{
    location.reload();
});



function start() {

    for (let i = 0; i < cells.length; i++) {

    
        cells[i].addEventListener("click", () => {
            
            if(gameOver === true){
                return;
            }
            
            
            let circle = document.createElement("div");
            circle.classList.add("circle");
            let cross = document.createElement("div");
            cross.classList.add("cross");
            
            
            if (cells[i].innerHTML !== "") {
                return;
            }
            
            countPlay++;
            
            if (countPlay % 2 !== 0) {
                cells[i].appendChild(circle);
                checkWinCircle();
            } else {
                cells[i].appendChild(cross);
                checkWinCross();
            }
            
            playerTurn();
        });
    }
    
}

function playerTurn() {
    
    player.innerText =  player.innerText === "Player 1" ? "Player 2" : "Player 1";
}


function checkWinCircle() {
    
    winningCombos.forEach(array => {
        let count = 0;
        array.forEach(element => {
            if (cells[element].firstElementChild?.classList.contains("circle")) {
                count++;
            }
            if (count === 3) {
                win("Player 1");
            };
        });

    });


}





function checkWinCross() {
    
    winningCombos.forEach(array => {
        let count = 0;
        array.forEach(element => {
            if (cells[element].firstElementChild?.classList.contains("cross")) {
                count++;
            }
            if (count === 3) {
                win("Player 2");
            };
        });

    });


}

function win(player) {

    const playerwin = document.getElementById("playerwin");
    playerwin.style.visibility = "visible";
    playerwin.innerText = `${player} Wins!!!!`;
    gameOver = true;
  
}

start();