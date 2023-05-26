import isCheck from "../isCheck.js"
import playMove from "../playMove.js"
import playMoveCopy from "../playMoveCopy.js"

export default function queen(piece, states, turn, dot) {
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
                current.element.addEventListener('click', playMove.bind(null, piece, current))
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
            current.element.addEventListener('click', playMove.bind(null, piece, current))
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
                current.element.addEventListener('click', playMove.bind(null, piece, current))
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
            current.element.addEventListener('click', playMove.bind(null, piece, current))
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
                current.element.addEventListener('click', playMove.bind(null, piece, current))
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
            current.element.addEventListener('click', playMove.bind(null, piece, current))
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
                current.element.addEventListener('click', playMove.bind(null, piece, current))
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
            current.element.addEventListener('click', playMove.bind(null, piece, current))
        }

        x++

        if (!states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y)) {
            x = 0
            break
        }
    }

    /* left up */

    while (states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y - (y + 1))) {
        const current = states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y - (y + 1))

        if (current.piece && !current.piece.endsWith(turn)) {
            playMoveCopy(piece, current)

            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                current.element.innerHTML += dot
                current.element.addEventListener('click', playMove.bind(null, piece, current))
                y = 0
                x = 0
                break
            }
        }
        if (current.piece) {
            y = 0
            x = 0
            break
        }

        playMoveCopy(piece, current)

        if (!isCheck(copy.pieces, game.turn)) {
            haveMove = true
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
        }

        x++
        y++

        if (!states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y - (y + 1))) {
            y = 0
            x = 0
            break
        }
    }

    /* right up */

    while (states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y - (y + 1))) {
        const current = states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y - (y + 1))

        if (current.piece && !current.piece.endsWith(turn)) {
            playMoveCopy(piece, current)

            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                current.element.innerHTML += dot
                current.element.addEventListener('click', playMove.bind(null, piece, current))
                y = 0
                x = 0
                break
            }
        }
        if (current.piece) {
            y = 0
            x = 0
            break
        }

        playMoveCopy(piece, current)

        if (!isCheck(copy.pieces, game.turn)) {
            haveMove = true
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
        }

        x++
        y++

        if (!states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y - (y + 1))) {
            y = 0
            x = 0
            break
        }
    }

    /* left down */

    while (states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y + (y + 1))) {
        const current = states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y + (y + 1))

        if (current.piece && !current.piece.endsWith(turn)) {
            playMoveCopy(piece, current)

            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                current.element.innerHTML += dot
                current.element.addEventListener('click', playMove.bind(null, piece, current))
                y = 0
                x = 0
                break
            }
        }
        if (current.piece) {
            y = 0
            x = 0
            break
        }

        playMoveCopy(piece, current)

        if (!isCheck(copy.pieces, game.turn)) {
            haveMove = true
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
        }

        x++
        y++

        if (!states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y + (y + 1))) {
            y = 0
            x = 0
            break
        }
    }

    /* right down */

    while (states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y + (y + 1))) {
        const current = states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y + (y + 1))

        if (current.piece && !current.piece.endsWith(turn)) {
            playMoveCopy(piece, current)

            if (!isCheck(copy.pieces, game.turn)) {
                haveMove = true
                current.element.innerHTML += dot
                current.element.addEventListener('click', playMove.bind(null, piece, current))
                y = 0
                x = 0
                break
            }
        }
        if (current.piece) {
            y = 0
            x = 0
            break
        }

        playMoveCopy(piece, current)

        if (!isCheck(copy.pieces, game.turn)) {
            haveMove = true
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
        }

        x++
        y++

        if (!states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y + (y + 1))) {
            y = 0
            x = 0
            break
        }
    }

    return haveMove
}