import eventFunc from "./move"

const cells = document.getElementById('game').querySelectorAll('.cells')

export default class pieces {
    constructor() {
        this.turn = 'white'
        this.pieces = []
        this.event = []
    }

    createData() {
        let i = 0

        for (let y = 0; y < 8; y++) {

            for (let x = 0; x < 8; x++) {


                this.pieces.push({ element: cells[i], x, y, piece: null })
                i++

            }

        }

        this.pieces[0].piece = 'rook_black'
        this.pieces[1].piece = 'knight_black'
        this.pieces[2].piece = 'bishop_black'
        this.pieces[3].piece = 'queen_black'
        this.pieces[4].piece = 'king_black'
        this.pieces[5].piece = 'bishop_black'
        this.pieces[6].piece = 'knight_black'
        this.pieces[7].piece = 'rook_black'

        this.pieces[63].piece = 'rook_white'
        this.pieces[62].piece = 'knight_white'
        this.pieces[61].piece = 'bishop_white'
        this.pieces[60].piece = 'king_white'
        this.pieces[59].piece = 'queen_white'
        this.pieces[58].piece = 'bishop_white'
        this.pieces[57].piece = 'knight_white'
        this.pieces[56].piece = 'rook_white'

        for (let pawn = 1; pawn <= 8; pawn++) {
            this.pieces[pawn + 7].piece = 'pawn_black'
            this.pieces[pawn + 7].moved = false

            this.pieces[56 - pawn].piece = 'pawn_white'
            this.pieces[56 - pawn].moved = false
        }

    }

    setter(oldState, newState) {

        for (let i = 0; i < this.pieces.length; i++) {
            if (this.pieces[i] === oldState) {
                this.pieces[i] = newState
            }
        }

    }

    drawData() {

        for (let i = 0; i < this.pieces.length; i++) {
            const el = this.pieces[i]
            if (!el.piece) {
                el.element.children[0].style.backgroundImage = ''
                continue
            }

            el.element.children[0].style.backgroundImage = `url(/theme/default/${el.piece}.png)`

        }

    }

    changeTurn() {
        this.turn = this.turn === 'white' ? 'black' : 'white'
    }

    removeEvents(event, func) {
        for (const el of this.event) {
            el.element.removeEventListener(event, el.binder)
        }
    }

    clearDot() {

        const clearDot = document.querySelectorAll('.dot')
        for (const dot of clearDot) {
            dot.parentNode.removeChild(dot)
        }

    }

    calcMove(states, turn) {

        const piecesPlayer = states.filter(el => el.piece /*if el.piece is null will return false */ && el.piece.endsWith(turn))

        console.log(piecesPlayer);

        for (const piece of piecesPlayer) {
            piece.binder = eventFunc.bind(null, piece.element, piece, states, turn)
            piece.element.addEventListener('click', piece.binder) /* click by current player */
            this.event.push(piece)
            // piece.element.removeEventListener('click', binder)
            // this.removeEvents('click', eventFunc)
        }

    }

}