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

    if (isActive == true){
        var element = document.getElementById(`${id}`)

        if (element.innerHTML == "") {
            takeTurn(id);
        }
    }
}


function takeTurn(id) {
    document.getElementById(`${id}`).innerHTML = player;
            
            gameState[id - 1] = player;
            
            for (let i = 0; i < winConditions.length; i++) {
    
                var currentArray = winConditions[i] 
    
                for (let j = 0; j < currentArray.length; j++) {
                    
                    var winCheck = currentArray[j];
                    if (gameState[winCheck] == player) {
                        
                        if (j == 2) {
                            turnTracker.innerHTML = `Player ${player} wins!`
                            document.getElementById('restart').style.display = "block"
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

function restartGame() {
    location.reload();
}
