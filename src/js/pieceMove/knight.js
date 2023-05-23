import isCheck from "../isCheck"
import playMove from "../playMove"
import playMoveCopy from "../playMoveCopy"

export default function knight(piece, states, turn, dot) {

    let haveMove = false

    const topLeft = states.find(el => el.x === piece.x - 1 && el.y === piece.y - 2)
    const topRight = states.find(el => el.x === piece.x + 1 && el.y === piece.y - 2)

    const middleTopLeft = states.find(el => el.x === piece.x - 2 && el.y === piece.y - 1)
    const middleTopRight = states.find(el => el.x === piece.x + 2 && el.y === piece.y - 1)

    const middleDownLeft = states.find(el => el.x === piece.x - 2 && el.y === piece.y + 1)
    const middleDownRight = states.find(el => el.x === piece.x + 2 && el.y === piece.y + 1)

    const downLeft = states.find(el => el.x === piece.x - 1 && el.y === piece.y + 2)
    const downRight = states.find(el => el.x === piece.x + 1 && el.y === piece.y + 2)

    const moves = [topLeft, topRight, middleTopLeft, middleTopRight, middleDownLeft, middleDownRight, downLeft, downRight]

    for (const move of moves) {

        if (move && move.piece && !move.piece.endsWith(turn)) {

            playMoveCopy(piece, move)

            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                move.element.innerHTML += dot
                move.element.addEventListener('click', playMove.bind(null, piece, move))
            }
        }
        if (move && !move.piece) {

            playMoveCopy(piece, move)

            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                move.element.innerHTML += dot
                move.element.addEventListener('click', playMove.bind(null, piece, move))
            }
        }

    }

    return haveMove
}