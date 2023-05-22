import isCheck from "../isCheck"
import playMove from "../playMove"
import playMoveCopy from "../playMoveCopy"

export default function king(piece, states, turn, dot) {

    const leftTop = states.find(el => el.x === piece.x - 1 && el.y === piece.y - 1)
    const top = states.find(el => el.x === piece.x && el.y === piece.y - 1)
    const rightTop = states.find(el => el.x === piece.x + 1 && el.y === piece.y - 1)
    const left = states.find(el => el.x === piece.x - 1 && el.y === piece.y)
    const right = states.find(el => el.x === piece.x + 1 && el.y === piece.y)
    const leftBottom = states.find(el => el.x === piece.x - 1 && el.y === piece.y + 1)
    const bottom = states.find(el => el.x === piece.x && el.y === piece.y + 1)
    const rightBottom = states.find(el => el.x === piece.x + 1 && el.y === piece.y + 1)

    const moves = [leftTop, top, rightTop, left, right, leftBottom, bottom, rightBottom]

    for (const move of moves) {

        if (move && !move.piece) {
            playMoveCopy(piece, move)
            console.log(isCheck(copy.pieces, game.turn), move)

            if (!isCheck(copy.pieces, game.turn)) {
                move.element.addEventListener('click', playMove.bind(null, piece, move))
                move.element.innerHTML += dot
            }
        }
        if (move && move.piece && !move.piece.endsWith(turn)) {
            playMoveCopy(piece, move)
            if (!isCheck(copy.pieces, game.turn)) {
                move.element.addEventListener('click', playMove.bind(null, piece, move))
                move.element.innerHTML += dot
            }
        }

    }

}