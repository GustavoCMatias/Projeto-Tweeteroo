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

    const tweet = {... req.body, avatar: users[idx].avatar}
    console.log(tweet)
    tweets.push(tweet)
    res.send(tweet)
})

server.get('/tweets', (req, res) => {
    const ultimosTweets = []
    tweets.forEach((each, index) => {
        if(index>tweets.length-11){
            ultimosTweets.push(each)
        }
    })
    res.send(ultimosTweets)
})