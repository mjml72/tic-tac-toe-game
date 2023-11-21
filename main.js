const selectionplayer = document.getElementById("selection-player");
const cells = document.getElementsByClassName("cells");
const turno = document.getElementById("turno");
const startBtn = document.getElementById("start");
const stringCircle = "circle";
const stringCross = "cross";

let countPlay = 0;
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
let gameOver = false;
let winner = false;

startBtn.addEventListener("click", () => {
    location.reload();
});

function startGame() {
    playerTurn("cross");
    for (let index = 0; index < cells.length; index++) {
        cells[index].addEventListener("click", () => {
            if (gameOver === true) {
                return;
            }
            if (cells[index].innerHTML === "") {
                play(index);
            }

        });
    }

}


function play(index) {

    let playerturn = stringCross;
    let check = stringCircle;

    
    let circle = document.createElement("div");
    circle.classList.add("circle");
    let cross = document.createElement("div");
    cross.classList.add("cross");
    countPlay++;

    if (countPlay % 2 !== 0) {
        cells[index].appendChild(cross);
        playerturn = stringCircle;
        check = stringCross;

    } else {
        cells[index].appendChild(circle);
        playerturn = stringCross;
        check = stringCircle;

    }
    playerTurn(playerturn);
    checkWin(check);

    if (countPlay === 9 && winner === false) {
        gameOver = true;
        turno.innerText = `¡EMPATE!`;    
    }
}

function playerTurn(playerturn) {
    turno.innerText = "Turno: ";
    if (playerturn === "cross") {
        turno.innerText += " X";
    } else {
        turno.innerText += " O";
    }
}

function checkWin(player) {
    winningCombos.forEach(array => {
        let count = 0;
        array.forEach(element => {
            if (cells[element].firstElementChild?.classList.contains(player)) {
                count++;
            }
            if (count === 3) {
                winner = true;
                win(player);
            };
        });

    });

}

function win(player) {
    
    let title = "GANADOR";
    let winner = "";
    if (player === "cross") {
        winner = " X ";
    } else if (player === "circle") {
        winner = " O ";
    }
    turno.innerText = `${title}
     ${winner}`;
    gameOver = true;

}

startGame();