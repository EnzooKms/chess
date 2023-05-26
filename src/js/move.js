import { pawn, king, queen, rook, bishop, knight } from "./pieceMove/import.js"

export default function eventFunc(e, piece, states, turn) {

    game.clearDot()
    const dot = '<div class="dot"></div>'

    if (piece.piece.startsWith('pawn')) {
        pawn(piece, states, turn, dot)
    }

    if (piece.piece.startsWith('king')) {
        king(piece, states, turn, dot)
    }

    if (piece.piece.startsWith('queen')) {
        queen(piece, states, turn, dot)
    }

    if (piece.piece.startsWith('rook')) {
        rook(piece, states, turn, dot)
    }

    if (piece.piece.startsWith('bishop')) {
        bishop(piece, states, turn, dot)
    }

    if (piece.piece.startsWith('knight')) {
        knight(piece, states, turn, dot)
    }

}