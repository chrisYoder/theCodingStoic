const express = require('express'), 
      router = express.Router(),
      Posts = require('../models/postsModel'),
      Comment = require('../models/commentModel');

router.get('/posts', (req, res) => {
    posts.find({}, (err, allPosts) => {
        if(err){
            console.log('Error:', err.message);
        } else {
            res.render('posts', {posts: allPosts});
        }
    });
});

module.exports = router;