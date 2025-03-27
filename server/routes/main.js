const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    const locals = {
        title: "Troy's Blog",
        description: "Simple blog created with NodeJs, Express and MongoDB."
    }

    res.render('index', {locals});
});

router.get('/about', (req, res) => {
    res.render('about');
})

module.exports = router;