let turn = 0,
    token = ""

function player(){
  token = turn % 2 === 0 ? "X" : "O"
  return token
  // Returns the token of the player whose turn it is, 'X' when the turn variable is even and 'O' when
  // it is odd.
}

function updateState(element){
  let playerToken = player()
  // Invokes player() and adds the returned string ('X' or 'O') to the clicked square on the game board.
  //(adds the current player's token to the passed-in <td> element)
}

function setMessage(string){
  // sets a provided string as the innerHTML of the div#message element
}

function checkWinner(){
  // Returns true if the current board contains any winning combinations (three X or O tokens in a row,
  ///vertically, horizontally, or diagonally). Otherwise, returns false.
  // If there is a winning combination on the board, checkWinner() should invoke setMessage(), passing
  // in the appropriate string based on who won: 'Player X Won!' or 'Player O Won!'
}


function doTurn(){
  updateState()
  checkWinner()
  setMessage()
  turn++
  // Increments the turn variable by 1.
  // Invokes the updateState() function, passing it the element that was clicked.
  // Invokes checkWinner() to determine whether the move results in a winning play.
}

function attachListeners(){

}

// attachListeners()
// Attaches the appropriate event listeners to the squares of the game board as well as for the
// button#save, button#previous, and button#clear elements.
// When a user clicks on a square on the game board, the event listener should invoke doTurn() and
// pass it the element that was clicked.
//  attachListeners() must be invoked inside either a $(document).ready() (jQuery) or
// a window.onload = () => {} (vanilla JavaScript). Otherwise, a number of the tests will fail
// (not to mention that your game probably won't function in the browser).
// When you name your save and previous functions, make sure to call them something like saveGame()
//and previousGames(). If you call them save() and previous() you may run into problems with the test suite.
