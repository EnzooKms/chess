const { Router } = require('express');
const sqlite3 = require('sqlite3')
const bcrypt = require('bcrypt')
const router = Router()
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()

router.get('/login', (req, res) => {
    res.sendFile(`${__dirname}/src/html/login.html`)
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    const db = new sqlite3.Database('./db.sqlite3')

    db.serialize(() => {
        db.get(`SELECT * FROM users WHERE username=${username}`, async (err, data) => {
            if (err) {
                req.session.err = `L'utilisateur ${username}`
                return res.redirect('login')
            }

            if (data.username && data.password) {
                const compare = await bcrypt.compare(password, data.password)
                if (compare) {
                    req.session.isConnected = true
                    req.session.user = username
                    res.status(200).redirect('/')
                } else {
                    return res.status(401).send({
                        code: 401,
                        err: `the password it wrong`
                    })
                }
            }
        })
    })
})

router.get('/sign', (req, res) => {
    res.sendFile(`${__dirname}/src/html/sign.html`)
})

router.post('/sign', async (req, res) => {
    const db = new sqlite3.Database('./db.sqlite3');
    const { username, password } = req.body
    const gen = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, gen)

    db.serialize(() => {
        const CREATE = db.prepare('CREATE TABLE IF NOT EXISTS users (username VARCHAR(255), password VARCHAR(255), uuid VARCHAR(255))')

        CREATE.run()
        CREATE.finalize()

        db.get(`SELECT * FROM users WHERE username = "${username}"`, (err, data) => {
            if (err) {
                throw new Error(err)
            }
            if (!data) {
                const INSERT = db.prepare('INSERT INTO users(username, password, uuid) VALUES ((?), (?), (?))', [username, hash, uuidv4()])

                INSERT.run()
                INSERT.finalize()

                db.close()

                req.session.isConnected = true
                req.session.user = username
                res.status(201).redirect('/')
            }
            else {
                res.status(200).send({
                    code: 200,
                    err: `already existed account with username: ${username}`
                })
            }

        })
    })
})

module.exports = { router };