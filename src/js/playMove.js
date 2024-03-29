import isCheck from "./isCheck"
import isCheckMate from "./isCheckMate"

export default function playMove(state, newPos) {

    const promote = game.turn === 'white' ? 1 : 6

    if (state.y === promote && state.piece.startsWith('pawn')) {
        /* promotion later */
        /* only queen right now */
        state.piece = `queen_${game.turn}`
    }

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
    newPos.piece = null

    game.drawData()
    game.clearDot()

    game.removeEvents()

    copy.copyData(game.pieces)

    game.changeTurn()

    setTimeout(() => {
        if (isCheck(game.pieces, game.turn)) {
            isCheckMate(game.pieces, game.turn)
            game.removeEvents()
            game.clearDot()
        }

        game.calcMove(game.pieces, game.turn)
    }, 500);
}