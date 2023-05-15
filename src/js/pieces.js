const cells = document.getElementById('game').querySelectorAll('.cells')

export default class pieces {
    constructor() {
        this.turn = 'white'
        this.pieces = []
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

    drawData() {

        for (let i = 0; i < this.pieces.length; i++) {
            const el = this.pieces[i]
            if (!el.piece) continue


            cells[i].children[0].style.backgroundImage = `url(/theme/default/${el.piece}.png)`

        }

    }

    changeTurn() {
        this.turn = this.turn === 'white' ? 'black' : 'white'
    }

    calcMoveCanDo(state, turn) {
        const piecesChecker /* les pieces du joueur enemis */ = state.filter(el => el.piece === `bishop_${turn}` || el.piece === `rook_${turn}` || el.piece === `queen_${turn}`)

        const piecesTurn /* toutes les pieces du joueur actuelle */ = state.filter(el => el.piece /* if el.piece = null will return false*/ && el.piece.endsWith(`_${turn === 'white' ? 'black' : 'white'}`))

        console.log(piecesChecker, piecesTurn);
    }
}