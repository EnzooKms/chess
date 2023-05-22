import playMove from "../playMove"

export default function knight(piece, states, turn, dot) {

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
            move.element.innerHTML += dot
            move.element.addEventListener('click', playMove.bind(null, piece, move))
        }
        if (move && !move.piece) {
            move.element.innerHTML += dot
            move.element.addEventListener('click', playMove.bind(null, piece, move))
        }

    }

}