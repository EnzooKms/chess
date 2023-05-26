const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 3000
let player;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/src/html/index.html`)
})

app.get('/game', (req, res) => {
    res.sendFile(`${__dirname}/src/html/game.html`)
    player = req.query.player
})

app.use(express.static(process.cwd()))

io.on('connection', (socket) => {
    console.log('a user is connected');

    socket.on('disconnect', () => {
        console.log('a user is disconnected');
    })

    socket.on('play', () => {
        io.emit('play', player)
    })

    socket.on('moved', (states) => {
        console.log(states);
        io.emit('moved', (states))
    })
})

http.listen(port, () => {
    console.log(`Server running on ${port}`);
})