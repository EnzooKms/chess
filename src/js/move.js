import playMove from "./playMove"

export default function eventFunc(e, piece, states, turn) {
    game.clearDot()
    const dot = '<div class="dot"></div>'
    const add = turn === 'white' ? 1 : - 1
    const add2 = turn === 'white' ? 2 : - 2

    const move1 = states.find(el => el.x === piece.x && el.y === piece.y - add)
    const move2 = states.find(el => el.x === piece.x && el.y === piece.y - add2)

    if (!piece.moved) {
        move2.element.innerHTML += dot

        move2.element.addEventListener('click', playMove.bind(null, piece, move2))
    }
    move1.element.innerHTML += dot
    move1.element.addEventListener('click', playMove.bind(null, piece, move1))

    // console.log(move1, move2);
    // game.removeEvent(e, 'click', eventFunc)
}