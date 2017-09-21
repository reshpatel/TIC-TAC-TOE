var game;

$("document").ready(
  function() {
    init();
  }

);

function init(){
  game = new Game();
  game.start();
}

function setCell(cellIdx){
  game.setCell(cellIdx);

}
