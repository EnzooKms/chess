import isCheck from "../isCheck.js"
import playMove from "../playMove.js"
import playMoveCopy from "../playMoveCopy.js"

export default function king(piece, states, turn, dot) {

    let haveMove = false

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

            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                move.element.addEventListener('click', playMove.bind(null, piece, move, false))
                move.element.innerHTML += dot
            }

        }
        if (move && move.piece && !move.piece.endsWith(turn)) {
            playMoveCopy(piece, move)
            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                move.element.addEventListener('click', playMove.bind(null, piece, move, false))
                move.element.innerHTML += dot
            }
        }

    }

    /* castle move */

    if (!piece.moved) {

        let x = 0

        /* petit castle */

        while (states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y)) {
            const current = states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y)

            if (isCheck(states, turn, current)) {
                break
            }

            if (current.piece && !current.piece.startsWith('rook')) {
                break
            }

            /* current = rook */
            else if (current.piece && !current.moved) {
                const KingMove = states.find(el => el.y === current.y && el.x === current.x - 1)
                const rookMove = states.find(el => el.y === current.y && el.x === current.x - 2)

                KingMove.element.addEventListener('click', () => {
                    playMove(piece, KingMove, true)
                    playMove(current, rookMove, false)
                })
                KingMove.element.innerHTML += dot
            }

            x++
        }

        /* grand castle */

        x = 0

        while (states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y)) {
            const current = states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y)

            if (isCheck(states, turn, current)) {
                break
            }

            if (current.piece && !current.piece.startsWith('rook')) {
                break
            }

            /* current = rook */
            else if (current.piece && !current.moved) {
                const KingMove = states.find(el => el.y === current.y && el.x === current.x + 2)
                const rookMove = states.find(el => el.y === current.y && el.x === current.x + 3)

                KingMove.element.addEventListener('click', () => {
                    playMove(piece, KingMove, true)
                    playMove(current, rookMove, false)
                })
                KingMove.element.innerHTML += dot
            }

            x++
        }

    }

    return haveMove
}