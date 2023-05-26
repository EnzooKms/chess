import board from "./board.js";
import pieces from "./pieces.js";

export default function load(player) {
    board()

    window.game = new pieces(player)
    window.copy = new pieces(player)
    copy.createData()

    game.createData()
    game.drawData()
    // game.changeTurn()
    game.calcMove(game.pieces, game.turn)
}