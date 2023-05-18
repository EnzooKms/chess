export default function playMove(state, newPos) {

    const oldState = {
        element: state.element,
        x: state.x,
        y: state.y,
        piece: state.piece
    }
    state.x = newPos.select.x
    state.y = newPos.select.y
    state.moved = true
    state.element = newPos.select.element
    newPos.select.x = oldState.x
    newPos.select.y = oldState.y
    newPos.select.element = oldState.element

    game.drawData()
    game.clearDot()

    game.removeEvents()

    game.changeTurn()

    game.calcMove(game.pieces, game.turn)
}