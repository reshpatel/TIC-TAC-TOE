var Board = function() {
  this.grid = [" ", " ", " ",
    " ", " ", " ",
    " ", " ", " "
  ];
  //this.a = '<img src="happy_face.gif" />';
  //this.playerWin = playerWin;
  this.renderBoard = function() {
    for (var i = 0; i < this.grid.length; i++) {
      $('.' + i).text(this.grid[i]);
    }
  };

 // you need to tell the function who's the winner
 // when rendering, if the content is the winner's piece, replace with emoji
 // you must call that function when a player wins
  //this.renderBoardAtTheEnd = function(playerWin) {
    // for (var i = 0; i < this.grid.length; i++) {
    //   var add = $()
    // $('.' + i).replaceWith(this.a)
    //}
  //};


};
