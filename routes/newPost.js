const express = require('express'), 
      router = express.Router(),
      Posts = require('../models/postsModel');

// New Post Route

router.get('/posts/new', (req, res) => {
    res.render('new');
});

// CREATE
router.post('/posts', (req, res) => {
   let title = req.body.blog.title, 
       image = req.body.blog.image,
       content = req.body.blog.content;
   
    content = req.sanitize(content);
    
    let newPost = {
        title: title,
        image: image,
        date: new Date(),
        content: content,
        comment: []
    };
    
    posts.create(newPost, (err, newPost) => {
        if(err){
            console.log('Error:', err.message);
        } else {
            res.redirect('/posts');
        }
    });
    
});