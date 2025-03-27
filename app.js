require('dotenv').config();

const express = require('express');

const app = express();
const PORT = 5000 || process.env.PORT;

app.get('', (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})