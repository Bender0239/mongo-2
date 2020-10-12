const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Post = require("../models/Post")

router.post('/', async (req,res) => {
    console.log(req.body)
    const post = new Post ({
        title: req.body.title,
        description: req.body.description
    })
    const savedPost = post.save()
        .then(savedPost => {
            res.json(savedPost)
        })
        .catch(err => {
            res.json({message: err})
        })  
    
})

router.get('/', (req,res) => {
    const posts = Post.find()
        .then(posts => {
            res.json(posts)
        })
        .catch(err => {
            console.log(err)
            res.json({message: err})
        })
})

router.patch('/:postId', (req,res) => {
    const updatedPost = Post.updateOne(
        {_id: req.params.postId},
        {$set: {title: req.body.title}}
    )
    .then(updatedPost => {
        res.json(updatedPost)
    })
    .catch(err => {
        res.json({message: err})
    })
})

router.delete('/:postId', (req,res) => {
    const removedPost = Post.remove({_id: req.params.postId})
    .then(removedPost => {
        res.json(removedPost)
    })
    .catch(err => {
        res.json({message: err})
    })
})



module.exports = router