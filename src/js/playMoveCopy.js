export default function playMoveCopy(gameState, gameNewPos) {

    const state = copy.pieces.find(el => el.piece === gameState.piece && el.x === gameState.x && el.y === gameState.y)
    const newPos = copy.pieces.find(el => el.x === gameNewPos.x && el.y === gameNewPos.y)

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

}