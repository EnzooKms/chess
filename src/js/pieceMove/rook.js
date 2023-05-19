import playMove from "../playMove"

export default function rook(piece, states, turn, dot) {
    let x = 0, y = 0

    /* top */

    while (states.find(el => el.x === piece.x && el.y === piece.y - (y + 1))) {
        const current = states.find(el => el.x === piece.x && el.y === piece.y - (y + 1))

        if (current.piece && !current.piece.endsWith(turn)) {
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
            y = 0
            break
        }
        if (current.piece) {
            y = 0
            break
        }

        current.element.innerHTML += dot
        current.element.addEventListener('click', playMove.bind(null, piece, current))

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
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
            y = 0
            break
        }
        if (current.piece) {
            y = 0
            break
        }

        current.element.innerHTML += dot
        current.element.addEventListener('click', playMove.bind(null, piece, current))

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
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
            x = 0
            break
        }
        if (current.piece) {
            x = 0
            break
        }

        current.element.innerHTML += dot
        current.element.addEventListener('click', playMove.bind(null, piece, current))

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
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
            x = 0
            break
        }
        if (current.piece) {
            x = 0
            break
        }

        current.element.innerHTML += dot
        current.element.addEventListener('click', playMove.bind(null, piece, current))

        x++

        if (!states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y)) {
            x = 0
            break
        }
    }

}