const express = require('express')
const app = express()
const http = require('http').Server(app)
const Socket = require('./socketServer')
const { router: serverApi } = require('./serverApi')
const session = require('express-session')
const mySocket = new Socket(http, null)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    name: process.env.SESSION_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: false,
    }
}))
app.use(serverApi);

const port = 3000
const url = '192.168.1.81'
let player;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/src/html/index.html`)

    console.log(req.session);
})

app.get('/game', (req, res) => {
    res.sendFile(`${__dirname}/src/html/game.html`)
    player = req.query.player
    mySocket.setPlayer(player)
})

app.get('/sign', (req, res) => {
    res.sendFile(`${__dirname}/src/html/sign.html`)
})

app.use(express.static(process.cwd()))

mySocket.socket()

http.listen(port, url, () => {
    console.log(`Server running on '${url}:${port}'`);
})