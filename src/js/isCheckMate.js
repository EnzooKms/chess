import { pawn, king, queen, rook, bishop, knight } from "./pieceMove/import.js"

export default function isCheckMate(states, turn) {

    const allPieces = states.filter(el => el.piece && el.piece.endsWith(turn))
    let haveMove = false

    for (const piece of allPieces) {

        const dot = '<div class="dot"></div>'


        if (piece.piece.startsWith('pawn')) {
            if (pawn(piece, states, turn, dot)) haveMove = true
        }

        if (piece.piece.startsWith('king')) {
            if (king(piece, states, turn, dot)) haveMove = true
        }

        if (piece.piece.startsWith('queen')) {
            if (queen(piece, states, turn, dot)) haveMove = true
        }

        if (piece.piece.startsWith('rook')) {
            if (rook(piece, states, turn, dot)) haveMove = true
        }

        if (piece.piece.startsWith('bishop')) {
            if (bishop(piece, states, turn, dot)) haveMove = true
        }

        if (piece.piece.startsWith('knight')) {
            if (knight(piece, states, turn, dot)) haveMove = true
        }
    }

    if (!haveMove) {
        alert('checkmate')
    }

}