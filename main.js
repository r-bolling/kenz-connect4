/*

1. Initialize the game
    a. players
    b. board display
    c. board model
    d. current player tracker
    e. set up click handlers
2. Take player input
    a. click handlers on each column
        - know which player is currently dropping a disc
        - only allow a drop if the column isn't full
        - drop a disk into the column
        - toggle the player
3. Check for game ending conditions
    a. has the game been won?
        - 4 in a row horizontally
        - 4 in a row vertically
        - 4 in a row diagonally (down-right)
        - 4 in a row diagonally (up-right)
    b. has the game ended in a tie?
        - display a tie message

*/

let boardModel = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]
let currentPlayer = 1
let numberOfDiscsPlayed = 0

const displayMessage = function (message) { // stub
    // TODO: Erase the content of the message div
    // Display the new message into the message div
    document.getElementById("message").innerHTML = "";
    document.getElementById("message").append(message);
    console.log(message)
}

const displayCurrentPlayer = function (currPlayer) {
    displayMessage("Player " + currPlayer + "'s turn!")
}
const displayWhoWon = function (winner) {
    displayMessage("Player " + winner + " wins!")
}
const displayTieMessage = function () {
    displayMessage("Tie game!")
}

let gameOver = 0;

function addDisk(col) {
    let disk = document.createElement("div");
    if (currentPlayer == 1) {
        disk.style.backgroundColor = "black";
        
    } else {
        disk.style.backgroundColor = "red";
    }
    col.appendChild(disk);
}

function updateBoard(col) {
    if (col.id == "col6") {
        if (boardModel[5][6] != 1 && boardModel[5][6] != 2) {
            boardModel[5][6] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[4][6] != 1 && boardModel[4][6] !=2) {
            boardModel[4][6] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[3][6] != 1 && boardModel[3][6] !=2) {
            boardModel[3][6] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[2][6] != 1 && boardModel[2][6] !=2) {
            boardModel[2][6] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[1][6] != 1 && boardModel[1][6] !=2) {
            boardModel[1][6] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[0][6] != 1 && boardModel[0][6] !=2) {
            boardModel[0][6] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        }

    }
    
    if (col.id == "col5") {
            if (boardModel[5][5] != 1 && boardModel[5][5] != 2) {
                boardModel[5][5] = currentPlayer;
                addDisk(col);
                numberOfDiscsPlayed++;
                switchToNextPlayer();
            } else if (boardModel[4][5] != 1 && boardModel[4][5] !=2) {
                boardModel[4][5] = currentPlayer;
                addDisk(col);
                numberOfDiscsPlayed++;
                switchToNextPlayer();
            } else if (boardModel[3][5] != 1 && boardModel[3][5] !=2) {
                boardModel[3][5] = currentPlayer;
                addDisk(col);
                numberOfDiscsPlayed++;
                switchToNextPlayer();
            } else if (boardModel[2][5] != 1 && boardModel[2][5] !=2) {
                boardModel[2][5] = currentPlayer;
                addDisk(col);
                numberOfDiscsPlayed++;
                switchToNextPlayer();
            } else if (boardModel[1][5] != 1 && boardModel[1][5] !=2) {
                boardModel[1][5] = currentPlayer;
                addDisk(col);
                numberOfDiscsPlayed++;
                switchToNextPlayer();
            } else if (boardModel[0][5] != 1 && boardModel[0][5] !=2) {
                boardModel[0][5] = currentPlayer;
                addDisk(col);
                numberOfDiscsPlayed++;
                switchToNextPlayer();
            }
            //TESTING
            /*
        console.log(col);
        console.log(boardModel[5]);
        console.log(boardModel[4]);
        console.log(boardModel[3]);
        console.log(boardModel[2]);
        console.log(boardModel[1]);
        console.log(boardModel[0]);
        */
    }
    
    if (col.id == "col4") {
        if (boardModel[5][4] != 1 && boardModel[5][4] != 2) {
            boardModel[5][4] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[4][4] != 1 && boardModel[4][4] !=2) {
            boardModel[4][4] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[3][4] != 1 && boardModel[3][4] !=2) {
            boardModel[3][4] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[2][4] != 1 && boardModel[2][4] !=2) {
            boardModel[2][4] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[1][4] != 1 && boardModel[1][4] !=2) {
            boardModel[1][4] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[0][4] != 1 && boardModel[0][4] !=2) {
            boardModel[0][4] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        }

    }

    if (col.id == "col3") {
        if (boardModel[5][3] != 1 && boardModel[5][3] != 2) {
            boardModel[5][3] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[4][3] != 1 && boardModel[4][3] !=2) {
            boardModel[4][3] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[3][3] != 1 && boardModel[3][3] !=2) {
            boardModel[3][3] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[2][3] != 1 && boardModel[2][3] !=2) {
            boardModel[2][3] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[1][3] != 1 && boardModel[1][3] !=2) {
            boardModel[1][3] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[0][3] != 1 && boardModel[0][3] !=2) {
            boardModel[0][3] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        }

    }

    if (col.id == "col2") {
        if (boardModel[5][2] != 1 && boardModel[5][2] != 2) {
            boardModel[5][2] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[4][2] != 1 && boardModel[4][2] !=2) {
            boardModel[4][2] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[3][2] != 1 && boardModel[3][2] !=2) {
            boardModel[3][2] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[2][2] != 1 && boardModel[2][2] !=2) {
            boardModel[2][2] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[1][2] != 1 && boardModel[1][2] !=2) {
            boardModel[1][2] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[0][2] != 1 && boardModel[0][2] !=2) {
            boardModel[0][2] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        }

    }

    if (col.id == "col1") {
        if (boardModel[5][1] != 1 && boardModel[5][1] != 2) {
            boardModel[5][1] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[4][1] != 1 && boardModel[4][1] !=2) {
            boardModel[4][1] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[3][1] != 1 && boardModel[3][1] !=2) {
            boardModel[3][1] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[2][1] != 1 && boardModel[2][1] !=2) {
            boardModel[2][1] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[1][1] != 1 && boardModel[1][1] !=2) {
            boardModel[1][1] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[0][1] != 1 && boardModel[0][1] !=2) {
            boardModel[0][1] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        }

    }

    if (col.id == "col0") {
        if (boardModel[5][0] != 1 && boardModel[5][0] != 2) {
            boardModel[5][0] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[4][0] != 1 && boardModel[4][0] !=2) {
            boardModel[4][0] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[3][0] != 1 && boardModel[3][0] !=2) {
            boardModel[3][0] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[2][0] != 1 && boardModel[2][0] !=2) {
            boardModel[2][0] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[1][0] != 1 && boardModel[1][0] !=2) {
            boardModel[1][0] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        } else if (boardModel[0][0] != 1 && boardModel[0][0] !=2) {
            boardModel[0][0] = currentPlayer;
            addDisk(col);
            numberOfDiscsPlayed++;
            switchToNextPlayer();
        }

    }
}

const dropDiskIntoColumn = function (columnEl) {
    // if the column is not full...
    // update the boardModel
    // update the HTML
    
   // if (columnEl < 6) {
     //   boardModel[columnThatWasClicked] = currentPlayer;

  //  }
 //   boardModel[5][5] = currentPlayer;
    
  //  numberOfDiscsPlayed++
    if (gameOver == 0) {
    updateBoard(columnEl);
    } 

}

const winnerHorizontal = function (board) {
    for (let row = 0; row < board.length; row++) {
         for (let col = 0; col < 4; col++) {
            //console.log(`${board[row][col]} ${board[row][col + 1]} ${board[row][col + 2]} ${board[row][col + 3]} `)
            if ((board[row][col] === board[row][col + 1]) &&
                (board[row][col] === board[row][col + 2]) &&
                (board[row][col] === board[row][col + 3]) &&
                (board[row][col] !== null)) {
                return board[row][col]
                
            }
        }
    }
    // return 1, 2, or null
    return null
}
const winnerVertical = function (board) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < board[row].length; col++) {
            // console.log(`${board[row][col]} ${board[row + 1][col]} ${board[row + 2][col]} ${board[row + 3][col]} `)
            if ((board[row][col] === board[row + 1][col]) &&
                (board[row][col] === board[row + 2][col]) &&
                (board[row][col] === board[row + 3][col]) &&
                (board[row][col] !== null)) {
                return board[row][col]
            }
        }
    }
    // return 1, 2, or null
    return null
}
const winnerDiagonalDownRight = function (board) {
    // return 1, 2, or null
    return null
}
const winnerDiagonalUpRight = function (board) {
    // return 1, 2, or null
    return null
}

const determineGameWinner = function (board) { // pure function
    const horz = winnerHorizontal(board)
    const vert = winnerVertical(board)
    const dnrt = winnerDiagonalDownRight(board)
    const uprt = winnerDiagonalUpRight(board)
    let winner

    if (horz !== null) {
        winner = horz
 //       gameOver = 1;
    } else if (vert !== null) {
        winner = vert
 //       gameOver = 1;
    } else if (dnrt !== null) {
        winner = dnrt
 //       gameOver = 1;
    } else if (uprt !== null) {
        winner = uprt
   //     gameOver = 1;
    } else {
        winner = null
    }

    // return 1, 2, or null (tie or game isn't isn't over)
    return winner
}

const gameIsATie = function () {
    // board is completely filled (numberOfDiscsPlayed is 42)
    // return true or false
    if (numberOfDiscsPlayed == 42) {
  //      gameOver = 1;
        return true;
    } else {
        return false;
    }
}
const switchToNextPlayer = function () {
    // currentPlayer 1 change to 2
    // currentPlayer 2 change to 1
    if (currentPlayer == 1) {
        currentPlayer++;
    } else if (currentPlayer == 2) {
        currentPlayer--;
    }
}

const columnClickHandler = function (event) {
    console.log('click!')
    const columnThatWasClicked = event.currentTarget
    dropDiskIntoColumn(columnThatWasClicked)
    // see if the game has been won or tied
    const winner = determineGameWinner(boardModel)
    if (winner !== null) {
        displayWhoWon(winner)
        gameOver = 1;
    } else if (gameIsATie(boardModel)) {
        displayTieMessage()
        gameOver = 1;
    } else if (gameOver == 0) {
        displayCurrentPlayer(currentPlayer)
     //   switchToNextPlayer()
    }

    
}

const createColumnEventListeners = function () {
    document.querySelector('#col0').addEventListener('click', columnClickHandler)
    document.querySelector('#col1').addEventListener('click', columnClickHandler)
    document.querySelector('#col2').addEventListener('click', columnClickHandler)
    document.querySelector('#col3').addEventListener('click', columnClickHandler)
    document.querySelector('#col4').addEventListener('click', columnClickHandler)
    document.querySelector('#col5').addEventListener('click', columnClickHandler)
    document.querySelector('#col6').addEventListener('click', columnClickHandler)
}

const displayBoard = function (boardModel) {

}

const initializeGame = function () {
    displayBoard(boardModel)
    createColumnEventListeners()
    displayCurrentPlayer(currentPlayer)
}

initializeGame()

const takePlayerInput = function () {
    columnClickHandler;
}


const testWinnerVertical = function () {
    console.assert((winnerVertical([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]) === null), "Winner Vertical fails on empty board")
    console.assert((winnerVertical([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [   1, null, null, null, null, null, null],
        [   1, null, null, null, null, null, null],
        [   1, null, null, null, null, null, null],
        [   1, null, null, null, null, null, null]
    ]) === 1), "Winner Vertical fails on col 0 player 1 win")
    console.assert((winnerVertical([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [2, null, null, null, null, null, null],
        [2, null, null, null, null, null, null],
        [2, null, null, null, null, null, null],
        [2, null, null, null, null, null, null]
    ]) === 2), "Winner Vertical fails on col 0 player 2 win")
    console.assert((winnerVertical([
        [null, null, 2, null, null, null, null],
        [null, null, 1, null, null, null, null],
        [   2, null, 1, null, null, null, 1],
        [   1, null, 1, null, null, null, 1],
        [   2, null, 2, null, null, null, 1],
        [   2, null, 2, null, null, null, 1]
    ]) === 1), "Winner Vertical fails on col 6 player 1 win")
}
//testWinnerVertical()