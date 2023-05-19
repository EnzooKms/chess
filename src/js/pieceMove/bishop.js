import playMove from "../playMove"

export default function bishop(piece, states, turn, dot) {
    let x = 0, y = 0

    /* left up */

    while (states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y - (y + 1))) {
        const current = states.find(el => el.x === piece.x - (x + 1) && el.y === piece.y - (y + 1))

        if (current.piece && !current.piece.endsWith(turn)) {
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
            y = 0
            x = 0
            break
        }
        if (current.piece) {
            y = 0
            x = 0
            break
        }

        current.element.innerHTML += dot
        current.element.addEventListener('click', playMove.bind(null, piece, current))

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
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
            y = 0
            x = 0
            break
        }
        if (current.piece) {
            y = 0
            x = 0
            break
        }

        current.element.innerHTML += dot
        current.element.addEventListener('click', playMove.bind(null, piece, current))

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
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
            y = 0
            x = 0
            break
        }
        if (current.piece) {
            y = 0
            x = 0
            break
        }

        current.element.innerHTML += dot
        current.element.addEventListener('click', playMove.bind(null, piece, current))

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
            current.element.innerHTML += dot
            current.element.addEventListener('click', playMove.bind(null, piece, current))
            y = 0
            x = 0
            break
        }
        if (current.piece) {
            y = 0
            x = 0
            break
        }

        current.element.innerHTML += dot
        current.element.addEventListener('click', playMove.bind(null, piece, current))

        x++
        y++

        if (!states.find(el => el.x === piece.x + (x + 1) && el.y === piece.y + (y + 1))) {
            y = 0
            x = 0
            break
        }
    }

}