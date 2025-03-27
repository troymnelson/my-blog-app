const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/***
 * GET /
 * HOME
 */

router.get('', async (req, res) => {
    const locals = {
        title: "Troy's Blog",
        description: "Simple blog created with NodeJs, Express and MongoDB."
    }

    try {
        const data = await Post.find();
        res.render('index', {locals, data});
    } catch (err) {
        console.log(err.message);
    }
});





router.get('/about', (req, res) => {
    res.render('about');
})

module.exports = router;