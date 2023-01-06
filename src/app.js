import express from 'express'
import cors from 'cors'

const users = []
const tweets = []



const server= express()
server.use(cors())
server.use(express.json())

server.listen(5000,() => {console.log('ta funfando')})

server.post('/sign-up', (req, res) => {
    users.push(req.body)
    res.send("OK")
})

server.post('/tweets', (req, res) => {
    const idx = users.findIndex(each => each.username === req.body.username)
    if(idx === -1){
        res.send('UNAUTHORIZED')
    }
    tweets.push(req.body)
    res.send("OK")
})