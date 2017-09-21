var Game = function() {
  this.player = "X";
  this.gameOver = false;

  this.winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ];
  //this.a = '<img src="happy_face.gif" />';
  this.board = new Board();
  this.start = function() {
    this.board.renderBoard();
    //this.board.renderBoardAtTheEnd();
  }

  this.renderText = function() {
    $('.playerText').text('Turn : ' + this.player)
  }

  this.changePlayer = function() {
    if (this.player == "O")
      this.player = "X";
    else
      this.player = "O";

  }

  this.setCell = function(cellIdx) {
    if (this.gameOver) return;
    this.board.grid[cellIdx] = this.player;
    this.checkState();
    if (this.gameOver) return;
    this.changePlayer();
    this.board.renderBoard();
    this.renderText();
  };

  this.checkState = function() {
    for (var i = 0; i < this.winCombinations.length; i++) {
      if (this.board.grid[this.winCombinations[i][0]] === this.board.grid[this.winCombinations[i][1]] &&
        this.board.grid[this.winCombinations[i][0]] === this.board.grid[this.winCombinations[i][2]] &&
        this.board.grid[this.winCombinations[i][0]] !== " ") {
        this.gameOver = true;
        $('.playerText').text('Player ' + this.player + ' wins');
      //  $('.playerText').replace(this.a);
        this.board.renderBoard();
        //this.board.renderBoardAtTheEnd(this.player);
      }
    }
  };




};
