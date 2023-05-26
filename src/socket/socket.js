import '../../node_modules/socket.io/client-dist/socket.io.js' // yes
import load from '../js/game.js'
import isCheck from "../js/isCheck.js"
import isCheckMate from "../js/isCheckMate.js"

const socket = io()
let loaded = false

socket.emit('play', () => {
})

socket.on('play', (player) => {
    if (player) {
        if (loaded) return
        loaded = true
        load(player)
    }

    load('local')
})

export function stateChange(states) {
    socket.emit('moved', states)
}

socket.on('moved', (states) => {
    game.pieces = states
    game.removeEvents()
    game.changeTurn()
    game.drawData()

    setTimeout(() => {
        if (isCheck(game.pieces, game.turn)) {
            isCheckMate(game.pieces, game.turn)
            game.removeEvents()
            game.clearDot()
        }

        game.calcMove(game.pieces, game.turn)
    }, 500);
})