import eventFunc from "./move"

const cells = document.getElementById('game').querySelectorAll('.cells')

export default function playMove(state, newPos) {
    const oldState = {
        element: state.element,
        x: state.x,
        y: state.y,
        piece: state.piece
    }
    state.x = newPos.x
    state.y = newPos.y
    state.moved = true
    state.element = newPos.element
    newPos.x = oldState.x
    newPos.y = oldState.y
    newPos.element = oldState.element

    game.drawData()
    game.clearDot()

    game.removeEvents(cells, 'click', eventFunc)
}