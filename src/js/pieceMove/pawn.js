import playMove from "../playMove"

export default function pawn(piece, states, turn, dot) {

    const add = turn === 'white' ? 1 : - 1
    const add2 = turn === 'white' ? 2 : - 2

    const enemie = turn === 'white' ? 'black' : 'white'

    /* take other piece */
    const leftUp = states.find(el => el.x === piece.x - 1 && el.y === piece.y - add)
    const rightUp = states.find(el => el.x === piece.x + 1 && el.y === piece.y - add)

    if (leftUp.piece && leftUp.piece.endsWith(enemie)) {
        leftUp.element.innerHTML += dot
        leftUp.element.addEventListener('click', playMove.bind(null, piece, leftUp))
    }

    if (rightUp.piece && rightUp.piece.endsWith(enemie)) {
        rightUp.element.innerHTML += dot
        rightUp.element.addEventListener('click', playMove.bind(null, piece, rightUp))
    }

    /* up move */

    const move1 = states.find(el => el.x === piece.x && el.y === piece.y - add)
    const move2 = states.find(el => el.x === piece.x && el.y === piece.y - add2)

    if (move1.piece) {
        return
    }

    if (!piece.moved) {
        move2.element.innerHTML += dot

        move2.binder = playMove.bind(null, piece, move2)
        move2.element.addEventListener('click', move2.binder)
    }
    move1.element.innerHTML += dot

    move1.binder = playMove.bind(null, piece, move1)
    move1.element.addEventListener('click', move1.binder)
}