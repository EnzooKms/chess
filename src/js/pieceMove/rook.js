import isCheck from "../isCheck.js"
import playMove from "../playMove.js"
import playMoveCopy from "../playMoveCopy.js"

export default function rook(piece, states, turn, dot) {
    let x = 0, y = 0
    let haveMove = false

    /* top */

    while (states.find(el => el.x === piece.x && el.y === piece.y - (y + 1))) {
        const current = states.find(el => el.x === piece.x && el.y === piece.y - (y + 1))

        if (current.piece && !current.piece.endsWith(turn)) {
            playMoveCopy(piece, current)

            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                current.element.innerHTML += dot
                current.element.addEventListener('click', playMove.bind(null, piece, current, false))
                y = 0
                break
            }
        }
        if (current.piece) {
            y = 0
            break
        }

        playMoveCopy(piece, current)

        if (!isCheck(copy.pieces, game.turn)) {
            haveMove = true
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current, false))
        }

        y++

        if (!states.find(el => el.x === piece.x && el.y === piece.y - (y + 1))) {
            y = 0
            break
        }
    }

    /* down */

    while (states.find(el => el.x === piece.x && el.y === piece.y + (y + 1))) {

        const current = states.find(el => el.x === piece.x && el.y === piece.y + (y + 1))

        if (current.piece && !current.piece.endsWith(turn)) {
            playMoveCopy(piece, current)

            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                current.element.innerHTML += dot
                current.element.addEventListener('click', playMove.bind(null, piece, current, false))
            }
            y = 0
            break
        }
        if (current.piece) {
            y = 0
            break
        }

        playMoveCopy(piece, current)

        if (!isCheck(copy.pieces, game.turn)) {
            haveMove = true
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current, false))
        }

        y++

        if (!states.find(el => el.x === piece.x && el.y === piece.y + (y + 1))) {
            y = 0
            break
        }
    }

    /* left */

    while (states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y)) {
        const current = states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y)

        if (current.piece && !current.piece.endsWith(turn)) {
            playMoveCopy(piece, current)

            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                current.element.innerHTML += dot
                current.element.addEventListener('click', playMove.bind(null, piece, current, false))
            }
            x = 0
            break
        }
        if (current.piece) {
            x = 0
            break
        }

        playMoveCopy(piece, current)

        if (!isCheck(copy.pieces, game.turn)) {
            haveMove = true
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current, false))
        }

        x++

        if (!states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y)) {
            x = 0
            break
        }
    }

    /* right */

    while (states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y)) {
        const current = states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y)

        if (current.piece && !current.piece.endsWith(turn)) {
            playMoveCopy(piece, current)

            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                current.element.innerHTML += dot
                current.element.addEventListener('click', playMove.bind(null, piece, current, false))
                x = 0
                break
            }
        }
        if (current.piece) {
            x = 0
            break
        }

        playMoveCopy(piece, current)

        if (!isCheck(copy.pieces, game.turn)) {
            haveMove = true
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current, false))
        }

        x++

        if (!states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y)) {
            x = 0
            break
        }
    }

    return haveMove
}