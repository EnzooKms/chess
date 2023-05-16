import board from "./board";
import pieces from "./pieces";

board()

window.game = new pieces()
game.createData()
game.drawData()
// game.changeTurn()
game.calcMove(game.pieces, game.turn)

console.log(game);