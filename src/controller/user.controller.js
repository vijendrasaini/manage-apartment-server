const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const newToken = (user)=>{
    return jwt.sign({user},"VIJENDRA")
}

const register = async (req, res)=>{
    try {
        let user = await User.findOne({email : req.body.email })
        
        if(user)
            return res
            .status(404)
            .send({
                status : "failed",
                reason : "User already exits"
            })
        user = await User.create(req.body)
        return res
        .status(200)
        .send({
            status : "success"
        })
    } catch (error) {
        return res
        .status(500)
        .send({
            status : "failed",
            reason : error.message
        })   
    }
}

const login =  async (req, res)=>{

    try {
        let user = await User.findOne({email : req.body.email})
        if(!user)
            return res
            .status(404)
            .send({
                status : "failed"
            })   
        const status = user.checkPassword(req.body.password)
        if(!status)
            return res
            .status(404)
            .send({
                status : "failed"
            })
        const token = newToken(user)
        return res
        .status(201)
        .send({token, status : "success"})
    } catch (error) {
        return res
        .status(500)
        .send({
            status : "failed",
            reason : error.message
        })
    }
}

module.exports = { register, login}

// const router = require('express').Router()

// router.post('/', async(req, res)=>{
//     try {
        
//     } catch (error) {
        
//     }
// })

// module.exports = router