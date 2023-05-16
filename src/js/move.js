import playMove from "./playMove"

export default function eventFunc(e, piece, states, turn) {
    console.log(true);
    game.clearDot()
    const dot = '<div class="dot"></div>'
    const add = turn === 'white' ? 1 : - 1
    const add2 = turn === 'white' ? 2 : - 2

    const move1 = states.find(el => el.x === piece.x && el.y === piece.y - add)
    const move2 = states.find(el => el.x === piece.x && el.y === piece.y - add2)

    if (!piece.moved) {
        move2.element.innerHTML += dot

        move2.binder = playMove.bind(null, piece, { select: move2, other: [move1] })
        move2.element.addEventListener('click', move2.binder)
        game.event.push(move2)
    }
    move1.element.innerHTML += dot

    move1.binder = playMove.bind(null, piece, { select: move1, other: [move2] })
    move1.element.addEventListener('click', move1.binder)
    game.event.push(move1)

}