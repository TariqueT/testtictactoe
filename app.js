const gameTitle = document.querySelector("#gameTitle");
const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = ["", "", "", "", "", "", "", "", ""];

/* this code was written after the function addGo was created and both circle and crosses were developed*/
let go = "circle";
gameTitle.textContent = "Tic-Tac-Toe!";
infoDisplay.textContent = "It's Circles Turn!";


/*Function to create the tic-tac-toe board  */
/*_cell, the underscore tells our code we aren't using the cell parameter  */
function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener(
      "click",
      addGo
    ); /* the 2nd parameter is the function addGo being passed in*/
    gameBoard.append(cellElement);
  });
}
createBoard();

/*Function addGo that will add a circle or a cross if neither is on the board  */
/*e is for event*/
function addGo(e) {
  //   console.log(e.target);
  const goDisplay = document.createElement("div");
  //   goDisplay.classList.add("circle");
  goDisplay.classList.add(go);
  e.target.append(goDisplay);
  /* this code was written after the function addGo was created and both circle and crosses and let go variable were developed*/
  /*Overrides the let go declaration*/
  go = go === "circle" ? "cross" : "circle";
  infoDisplay.textContent = "It is now " + go + "'s go.";
  e.target.removeEventListener("click", addGo);
  checkScore();
}

function checkScore() {
  const allSquares = document.querySelectorAll(".square");
  // console.log(allSquares);
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], /*horizontal wins*/
    [0, 3, 6], [1, 4, 7], [2, 5, 8], /*vertical wins*/
    [0, 4, 8], [2, 4, 6] /*diagonal wins*/
  ];

 console.log(allSquares[4]);

  /*You can't use removeEventListener method to stop the user from clicking in other squares after a win so use replaceWith method */
 winCombos.forEach(array => {
    const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains("circle"));

    if (circleWins) {
      infoDisplay.textContent = "Circle Wins!";
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
      return;
    }

 })


 /*You can't use removeEventListener method to stop the user from clicking in other squares after a win so use replaceWith method */
 winCombos.forEach(array => {
  const crossWins = array.every(cell => allSquares[cell].firstChild?.classList.contains("cross"));

  if (crossWins) {
    infoDisplay.textContent = "Cross Wins!";
    allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
    return;
  }

})
}

