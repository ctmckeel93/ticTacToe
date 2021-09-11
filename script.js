console.log("Testing the connection to javascript file");
var player = "X";
const gameState = ["", "", "", "", "", "", "", "", ""];
var isActive = true;
var turnTracker = document.getElementById("turn-tracker");

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function chooseBox(id) {
    console.log(id);
    if (isActive == true){

        var element = document.getElementById(`${id}`)
        if (element.innerHTML == "") {
            document.getElementById(`${id}`).innerHTML = player;
            gameState[id - 1] = player;
            console.log(gameState);
            for (let i = 0; i < winConditions.length; i++) {
                console.log(winConditions[i]);
                var currentArray = winConditions[i] 
    
                for (let j = 0; j < currentArray.length; j++) {
                    console.log(currentArray[j]);
                    var winCheck = currentArray[j];
                    if (gameState[winCheck] == player) {
                        console.log("Yes!")
                        if (j == 2) {
                            turnTracker.innerHTML = `Player ${player} wins!`
                            isActive = false;
                            return 0
                        }
                    }
                    else {
                        break;
                    }
                }
            }
            if (player == "X") {
                player = "O";
            }
            else {
                player = "X"
            }
            const turnDisplay = `Player ${player}, it's your turn!`;
            turnTracker.innerHTML = turnDisplay;
        }
    }
}

