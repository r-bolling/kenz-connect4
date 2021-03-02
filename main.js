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
  [null, null, null, null, null, null, null],
];

let currentPlayer = 1;
let gameOver = 0;
let numberOfDiscsPlayed = 0;

const addDisk = (col) => {
  let disk = document.createElement('div');
  if (currentPlayer == 1) {
    disk.style.backgroundColor = 'black';
  } else {
    disk.style.backgroundColor = 'red';
  }
  col.appendChild(disk);
};

const columnClickHandler = function (event) {
  console.log('click!');
  const columnThatWasClicked = event.currentTarget;
  dropDiskIntoColumn(columnThatWasClicked);
  // see if the game has been won or tied
  const winner = determineGameWinner(boardModel);
  if (winner !== null) {
    displayWhoWon(winner);
    gameOver = 1;
  } else if (gameIsATie(boardModel)) {
    displayTieMessage();
    gameOver = 1;
  } else if (gameOver == 0) {
    displayCurrentPlayer(currentPlayer);
  }
};

const createColumnEventListeners = function () {
  document.querySelector('#col0').addEventListener('click', columnClickHandler);
  document.querySelector('#col1').addEventListener('click', columnClickHandler);
  document.querySelector('#col2').addEventListener('click', columnClickHandler);
  document.querySelector('#col3').addEventListener('click', columnClickHandler);
  document.querySelector('#col4').addEventListener('click', columnClickHandler);
  document.querySelector('#col5').addEventListener('click', columnClickHandler);
  document.querySelector('#col6').addEventListener('click', columnClickHandler);
};

const determineGameWinner = function (board) {
  const horz = winnerHorizontal(board);
  const vert = winnerVertical(board);
  const dnrt = winnerDiagonalDownRight(board);
  const uprt = winnerDiagonalUpRight(board);
  let winner;

  if (horz !== null) {
    winner = horz;
    //       gameOver = 1;
  } else if (vert !== null) {
    winner = vert;
    //       gameOver = 1;
  } else if (dnrt !== null) {
    winner = dnrt;
    //       gameOver = 1;
  } else if (uprt !== null) {
    winner = uprt;
    //     gameOver = 1;
  } else {
    winner = null;
  }

  // return 1, 2, or null (tie or game isn't isn't over)
  return winner;
};

const displayBoard = function (boardModel) {};

const displayCurrentPlayer = function (currPlayer) {
  displayMessage(`Player ${currPlayer}'s turn!`);
};

const displayMessage = function (message) {
  document.getElementById('message').innerHTML = '';
  document.getElementById('message').append(message);
  console.log(message);
};

const displayTieMessage = function () {
  displayMessage('Tie game!');
};

const displayWhoWon = function (winner) {
  displayMessage(`Player ${winner} wins!`);
};

const dropDiskIntoColumn = function (columnEl) {
  if (gameOver === 0) {
    updateBoard(columnEl);
  }
};

const gameIsATie = function () {
  // board is completely filled (numberOfDiscsPlayed is 42)
  // return true or false
  if (numberOfDiscsPlayed == 42) {
    //      gameOver = 1;
    return true;
  } else {
    return false;
  }
};

const initializeGame = function () {
  displayBoard(boardModel);
  createColumnEventListeners();
  displayCurrentPlayer(currentPlayer);
};

const switchToNextPlayer = function () {
  if (currentPlayer === 1) {
    currentPlayer++;
  } else {
    currentPlayer--;
  }
};

const takePlayerInput = function () {
  columnClickHandler;
};

const updateBoard = (col) => {
  for (let i = 6; i >= 0; i--) {
    if (col.id === `col${i}`) {
      for (let j = 5; j >= 0; j--) {
        if (boardModel[j][i] != 1 && boardModel[j][i] != 2) {
          boardModel[j][i] = currentPlayer;
          addDisk(col);
          numberOfDiscsPlayed++;
          switchToNextPlayer();
          break;
        }
      }
    }
  }
};

const winnerDiagonalDownRight = function (board) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        board[row][col] === board[row + 1][col + 1] &&
        board[row][col] === board[row + 2][col + 2] &&
        board[row][col] === board[row + 3][col + 3] &&
        board[row][col] !== null
      ) {
        return board[row][col];
      }
    }
  }
  return null;
};

const winnerDiagonalUpRight = function (board) {
  for (let row = 5; row > 2; row--) {
    for (let col = 0; col < 4; col++) {
      if (
        board[row][col] === board[row - 1][col + 1] &&
        board[row][col] === board[row - 2][col + 2] &&
        board[row][col] === board[row - 3][col + 3] &&
        board[row][col] !== null
      ) {
        return board[row][col];
      }
    }
  }
  return null;
};

const winnerHorizontal = function (board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        board[row][col] === board[row][col + 1] &&
        board[row][col] === board[row][col + 2] &&
        board[row][col] === board[row][col + 3] &&
        board[row][col] !== null
      ) {
        return board[row][col];
      }
    }
  }
  return null;
};

const winnerVertical = function (board) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (
        board[row][col] === board[row + 1][col] &&
        board[row][col] === board[row + 2][col] &&
        board[row][col] === board[row + 3][col] &&
        board[row][col] !== null
      ) {
        return board[row][col];
      }
    }
  }
  return null;
};

initializeGame();

// TESTS
const testWinnerVertical = function () {
  console.assert(
    winnerVertical([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]) === null,
    'Winner Vertical fails on empty board'
  );
  console.assert(
    winnerVertical([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
    ]) === 1,
    'Winner Vertical fails on col 0 player 1 win'
  );
  console.assert(
    winnerVertical([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [2, null, null, null, null, null, null],
      [2, null, null, null, null, null, null],
      [2, null, null, null, null, null, null],
      [2, null, null, null, null, null, null],
    ]) === 2,
    'Winner Vertical fails on col 0 player 2 win'
  );
  console.assert(
    winnerVertical([
      [null, null, 2, null, null, null, null],
      [null, null, 1, null, null, null, null],
      [2, null, 1, null, null, null, 1],
      [1, null, 1, null, null, null, 1],
      [2, null, 2, null, null, null, 1],
      [2, null, 2, null, null, null, 1],
    ]) === 1,
    'Winner Vertical fails on col 6 player 1 win'
  );
};
//testWinnerVertical()
