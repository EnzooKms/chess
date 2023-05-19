import { pawn, king } from "./pieceMove/import"

export default function eventFunc(e, piece, states, turn) {

    game.removeEvents()
    game.calcMove(game.pieces, game.turn)
    game.clearDot()
    const dot = '<div class="dot"></div>'

    if (piece.piece.startsWith('pawn')) {
        pawn(piece, states, turn, dot)
    }

    if (piece.piece.startsWith('king')) {
        king(piece, states, turn, dot)
    }

}