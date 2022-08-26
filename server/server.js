
import express, { json } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import User from './models/user.js'
import jwt from 'jsonwebtoken'
const app = express()



app.use(cors())
app.use(json())

mongoose.connect('mongodb://localhost:27017/movie-review-signup', (error)=>{
        if(!error) console.log('db connected');
        else console.log('db error')
})


app.post('/api/register', async (req,res) => {
    console.log(req.body)
    try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({status: 'ok'})
    }catch (error){
        res.json({status: 'error', error: 'Duplicate email'})
    }

})

app.post('/api/login', async (req,res) => {
    
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if(user) {

        const token = jwt.sign({
            
            name: user.name,
            email: user.email,

        },'secretJGLC123')

        return res.json({status: 'ok', user: token })
        } else{ 
        return res.json({status: 'error', user: false})
        }
})


app.get('/api/quote', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secretJGLC123')
    const email = decoded.email
    const user = await User.findOne({email: email})

    return res.json({status: 'ok', quote: user.quote})
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }


})


app.post('/api/quote', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secretJGLC123')
    const email = decoded.email
    const user = await User.updateOne({email: email}, {$set: {quote: req.body.quote}})

    return res.json({status: 'ok'})
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }


})

app.listen(5001, () => {
    console.log('Server Running on 5001')
})