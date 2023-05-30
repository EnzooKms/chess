module.exports = class socket {
    constructor(http, player) {
        this.http = http
        this.player = player
    }

    setPlayer(player) {
        this.player = player
    }

    socket() {
        const io = require('socket.io')(this.http)

        io.on('connection', (socket) => {
            console.log('a user is connected');

            socket.on('disconnect', () => {
                console.log('a user is disconnected');
            })

            socket.on('play', () => {
                io.emit('play', this.player)
            })

            socket.on('moved', (states) => {
                console.log(states);
                io.emit('moved', (states))
            })
        })
    }
}