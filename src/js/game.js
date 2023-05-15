import board from "./board";
import pieces from "./pieces";

board()

window.game = new pieces()
game.createData()
game.drawData()
game.calcMoveCanDo(game.pieces, game.turn)

console.log(game);